import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";



export const AuthOptions:NextAuthOptions={

pages:{
     signIn:'/login'
},
    
    providers:[Credentials({
        name:"credentials",
        credentials:{
            email:{},
            password:{}
        },
        authorize:async(values)=>{
           const response = await fetch(`${process.env.BASE_URl}/auth/signin`,{
            method:'POST',
            body:JSON.stringify({
                email:values?.email,
                password:values?.password
            }),
            headers:{'Content-Type':'application/json'}           })

            const payLoad = await response.json()
            
                   if(payLoad.message == 'success'){
                    
                     const decodedToken:{id:string} = jwtDecode(payLoad.token)
                        console.log('sah');
                        
                        return {
                            id:decodedToken.id,
                            user:payLoad.user,
                            token:payLoad.token
                        }
                    }else{
                       console.log('fy moshkla');
                   throw new Error('Email or password invalid')
                   }
                    
        }
    })],


    callbacks:{
            async jwt({ token, user }) {
if (user){
    
                token.user = user?.user,
                token.token = user.token
}
      return token
    },

      async session({ session, token }) {

          session.user = token.user


          
      return session
    }

    }
}
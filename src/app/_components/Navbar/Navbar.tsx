"use client"
import logo from '../../../../public/images/freshcart-logo.svg'
import { CircleX, Menu, ShoppingCart } from 'lucide-react'
import { useContext, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/cart.context'

export default function Navbar() {

    const context = useContext(CartContext)

const router = useRouter()
  const {data} = useSession()
  
 async function handleLogout(){
       await signOut()
       router.push('/login')
  }

    type loko =any
  const [toggle,setToggle] = useState(false)
  const [iconOk,setIconok] = useState(true)
    const mobMenuBar:loko = useRef('');
function menuToggle(){
    setToggle(true)
    setIconok(false)
    console.log('wow');
    mobMenuBar.current.style.transform ='translateY(32rem)'
    
}
function notMenuToggle(){
    setToggle(false)
    setIconok(true)
     mobMenuBar.current.style.transform ='translateY(-32rem)'
}

  return <>
<nav className="bg-slate-300 p-5">
    <div className="container flex justify-between items-center">
        <div> <Link href="/"><Image src={logo} alt='navbar logo'/></Link></div>
        <div className="left">
            <ul className='hidden  md:flex gap-3 items-center text-slate-700'>
                <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/">Home</Link></li>
                <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/products">Products</Link></li>
                <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/categories">Categories</Link></li>
                {data ? <>   <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/brands">brands</Link></li>
                <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/allorders">Orders</Link></li></>:''}
               
            </ul>
        </div>
        <div className="right">
            <ul className='hidden  md:flex gap-3 items-center'>
                {data ?<><li className='relative'>
                  <Link href={'/cart'}><ShoppingCart/></Link>
                  {context?.numOfCartItem ? <h5 className='bg-green-600 text-white rounded-full w-6 h-6 flex justify-center items-center absolute top-[-15px] end-[-12px]'>{context?.numOfCartItem}</h5>:<h5 className='bg-green-600 text-white rounded-full w-6 h-6 flex justify-center items-center absolute top-[-15px] end-[-12px]'>0</h5>}
                  </li> <li onClick={handleLogout} className='hover:text-black hover:font-semibold hover:transition-all'><Link href="">Logout</Link></li>
                <li className='bg-slate-100 p-1 px-2 rounded-2xl '>Hello,<span className='font-semibold text-lg'> {data.user?.name}</span></li> </>:<>
                 <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/login">Login</Link></li>
                <li className='hover:text-black hover:font-semibold hover:transition-all'><Link href="/register">Register</Link></li>
                </>}
                 
               
            </ul>
        </div>
      {iconOk ? <div onClick={menuToggle}  className=' outline-2 hover:bg-slate-400 hover:transition-all outline-black rounded-lg p-1 md:hidden'> <Menu /></div>: <div onClick={notMenuToggle}  className='hover:text-slate-400 hover:transition-all  md:hidden'> <CircleX size={30} /></div>}
                 
            
    </div>

</nav>
     <div ref={mobMenuBar} className='flex bg-white justify-center z-50 -mt-1  absolute -top-110 transition-all duration-500  w-full items-center '> <ul className='space-y-4  w-1/2 text-center p-4  md:hidden rounded-b-2xl'>   
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/">Home</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/products">Products</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/categories">Categories</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/brands">brands</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/orders">Orders</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/login">Login</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300  hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><Link href="/register">Register</Link></li>
                <li onClick={notMenuToggle} className='hover:text-black border-b-2 pb-2 border-slate-300 hover:bg-slate-400 hover:rounded-md hover:p-1 hover:font-semibold hover:transition-all'><a href="">Logout</a></li>
            </ul></div>
  </>
}

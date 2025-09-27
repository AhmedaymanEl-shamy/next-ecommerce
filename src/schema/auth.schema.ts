import * as zod from 'zod'

export const RegisterSchema = zod.object({
    name:zod.string().nonempty('name is required').min(3,'minimum 3 chars').max(15,'maxmum 15 chars'),
    email:zod.string().nonempty('email is required'),
    password:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'Password must start with capital letter followed by atleast 5 chars'),
    rePassword:zod.string().nonempty('password is required'),
    phone:zod.string().nonempty('phone is required').regex(/^01[0-125][0-9]{8}$/,'phone must be egyptian number')
}).refine((object)=>object.password == object.rePassword,{
    path:['rePassword'],
    error:'Password not match'
} )


export const LoginSchema = zod.object({
    email:zod.string().nonempty('email is required'),
    password:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'Password must start with capital letter followed by atleast 5 chars'),
})

export const FrogetSchema = zod.object({
    email:zod.string().nonempty('email is required')
})
export const VerifySchema = zod.object({
    resetCode:zod.string().nonempty('Code is required')
})
export const ResetSchema = zod.object({
    email:zod.string().nonempty('email is required'),
     newPassword:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'Password must start with capital letter followed by atleast 5 chars')
    
})
export type RegisterSType = zod.Infer<typeof RegisterSchema>
export type LoginSType = zod.Infer<typeof LoginSchema>
export type ForgetSType = zod.Infer<typeof FrogetSchema>
export type VerifySType = zod.Infer<typeof VerifySchema>
export type ResetSType = zod.Infer<typeof ResetSchema>
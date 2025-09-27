import * as zod from 'zod'



 export const checkOutShema = zod.object({
    details:zod.string('must be string').nonempty('details is required'),
    phone:zod.string('must be string').nonempty('phone isrequired').regex(/(\+2)?^01[0125][0-9]{8}$/,'number must be egyptian '),
    city:zod.string('must be string').nonempty('city is required')

})


export type CheckOutType = zod.infer<typeof checkOutShema>
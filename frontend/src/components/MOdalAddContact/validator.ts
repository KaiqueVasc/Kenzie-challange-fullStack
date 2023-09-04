import { z } from "zod";

 export const AddContactSchema = z.object({
    fullName: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    telephone: z.string().min(11,"Deve ter no minimo 11 digitos")
})

 export type ContactData = z.infer<typeof AddContactSchema>


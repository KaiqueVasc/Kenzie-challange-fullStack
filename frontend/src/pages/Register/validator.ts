import { z } from "zod";

export const Registerschema = z.object({
    fullName: z.string().max(120),
    email: z.string().email("Deve ser um e-mail!"),
    password: z.string().nonempty("Senha é obrigatória"),
    telephone: z.string().min(11)
})

export type RegisterData = z.infer<typeof Registerschema>
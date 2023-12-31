import { z } from "zod";

export const Loginschema = z.object({
    email: z.string().email("Deve ser um e-mail!"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type LoginData = z.infer<typeof Loginschema>
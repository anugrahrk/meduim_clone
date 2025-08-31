import z from 'zod'

export const signupSchema=z.object({
  email:z.string().email(),
  password:z.string().min(6),
  name:z.string().optional()
})
export type SignupType=z.infer<typeof signupSchema>

export const signinSchema=z.object({
  email:z.string().email(),
  password:z.string().min(6)
})
export type SigninType=z.infer<typeof signupSchema>

export const createBlogSchema=z.object({
    title:z.string(),
    content:z.string()
})
export type CreateBlogType=z.infer<typeof createBlogSchema>

export const updateBlogSchema=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
export type UpdateBlogType=z.infer<typeof createBlogSchema>
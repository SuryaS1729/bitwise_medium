import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput,signinInput } from "@surya7314/medium-common";



export const userRouter= new Hono<{Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }}>()



userRouter.post('/signup',async (c) => {
    
    const body = await c.req.json()

    const { success }= signupInput.safeParse(body)

    if(!success){
        c.status(411)
        return c.json({
            message: "input not correct"
        })
    }
    const prisma = new PrismaClient({
   datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
   
 const userCheck= await prisma.user.findFirst({
   where:{username: body.username}
 })
 if (userCheck) {
   return c.text("user already exists please use the signin route")

 } else {
   try {
       const user = await prisma.user.create({
           data:{
               username: body.username,
               password: body.password,
               name: body.name
       
           }
           
       })
       console.log(user)
       const jwt = await sign({
           id: user.id
       }, c.env.JWT_SECRET)
       return c.text(jwt)
   } catch (error) {
       console.log(error)
       c.status(411)
       return c.text("invalid")
   }

 }
   
})

userRouter.post('/signin',async(c) => {
    const body = await c.req.json()

    const { success }= signinInput.safeParse(body)

    if(!success){
        c.status(411)
        return c.json({
            message: "input not correct"
        })
    }
   const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
       
   
       try {
           const user = await prisma.user.findFirst({
               where:{
                   username: body.username,
                   password: body.password,
               }})
               console.log(user)
           if(!user){
               c.status(403)
           return c.json({
               messasge: "incorrect credentials"
           })}
               

           const jwt = await sign({
               id: user.id
           }, c.env.JWT_SECRET)

           return c.text(jwt)
       } catch (error) {
           console.log(error)
           c.status(411)
           return c.text('invalid')
           
       }
})

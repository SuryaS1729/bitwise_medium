import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'


const app = new Hono<{Bindings:{
  DATABASE_URL: string,
  JWT_SECRET: string
}}>()

app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter)


export default app
//postgresql://surya.curiousfusion:6IVUXRYCw5Zg@ep-tiny-queen-a55i2i5e-pooler.us-east-2.aws.neon.tech/test?sslmode=require

//

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjg0MmI2ZWUtNjBjOS00YzcyLThiODgtMDdmM2Q5ZjM3NThkIiwidGVuYW50X2lkIjoiZmNkNWJlN2NiOTdlMDU4NzQzOWQwN2I5MDM3YzY3NGE1MTFmYjZmNzk2OTAyZGY1YzIwMzZkZDg3Mjg4MmY2NyIsImludGVybmFsX3NlY3JldCI6IjFmNmMxOGU0LTdlMjMtNGEyYi1iMDE5LTMzNjU0MGU4Mzc4YiJ9.wJTbUToQh7iw07MN_zt-jz4zlt2IcX88IPTFG4o1hms"
// DIRECT_URL="<YOUR_DATABASE_CONNECTION_STRING>"
// app.get('/', (c) => {
//   return c.text('Hello sahithi!')
// })
import fastify from 'fastify'
import { prisma } from './lib/prisma'
import { createTrip } from './routes/create-trip'
import {
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)

app.get('/listar', async () => {
  await prisma.trip.findMany({})
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})

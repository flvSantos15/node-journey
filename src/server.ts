import fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

// Parei em 31:29
app.post('/cadastrar', async () => {
  await prisma.trip.create({
    data: {
      destination: 'São Paulo',
      starts_at: new Date(),
      ends_at: new Date()
    }
  })

  return 'Registro cadastrado com sucesso'
})

app.get('/listar', async () => {
  await prisma.trip.findMany({})
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})

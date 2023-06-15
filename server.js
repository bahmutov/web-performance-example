const path = require('path')
const fs = require('fs')
const fastify = require('fastify')({ logger: true })
const publicFolder = path.join(__dirname, 'public')
const indexDoc = fs.readFileSync(path.join(publicFolder, 'index.html'), 'utf8')
const styles = fs.readFileSync(path.join(publicFolder, 'style.css'), 'utf8')

fastify.get('/', (request, reply) => {
  setTimeout(() => {
    reply.type('text/html').send(indexDoc)
  }, 2000)
})

fastify.get('/style.css', (request, reply) => {
  setTimeout(() => {
    reply.type('text/css').send(styles)
  }, 500)
})

fastify.register(require('@fastify/static'), {
  root: publicFolder,
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3003 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

async function closeServer(signal) {
  console.log(`closing the server with the signal ${signal}`)
  await fastify.close()
  process.kill(process.pid, signal)
}
process.once('SIGINT', closeServer)
process.once('SIGTERM', closeServer)

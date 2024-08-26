import express from 'express'
import mongoose from 'mongoose'

const Persona = mongoose.model('Persona', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://willian:password@servmongo:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando...')
  const personas = await Persona.find();
  return res.send(personas)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Persona.create({ tipo: 'Castro', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))

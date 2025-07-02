import cors from 'cors'
import 'dotenv/config'
import express from 'express'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001
const PATH = process.env.EXPRESS_API_PATH || '/api'

app.get(`${PATH}`, (_req, res) => {
  res.status(200).json({ message: 'Hello from the server!' })
})

app.post(`${PATH}/item`, (_req, res) => {
  res.send('Got a post request!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

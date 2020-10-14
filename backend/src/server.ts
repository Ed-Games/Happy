import express, { response } from 'express'
import connection from './database/connection'

const app = express()

app.use(express.json())

app.get('/user', (request, response)=>{
    console.log('sgssdeghsioghwiog')
    return response.json({message: 'NLW3'})
})

app.listen(3333)


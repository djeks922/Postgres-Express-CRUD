import express from 'express'
import controller from './queries.js'


const app = express()
app.use(express.json())


// Routers //

app.get('/users', controller.getUsers)
app.get('/users/:id', controller.getUserById)
app.post('/users', controller.createUser)
app.put('/users/:id', controller.updateUser)
app.delete('/users/:id', controller.deleteUser)

app.listen(1337, async ( ) => {
    console.log('app listening to port 1337')
})
import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './src/routes/task.routes.js'
import { connectToMongo } from './src/config/db.js'
dotenv.config()
const port = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/tasks',taskRoutes)
console.log(port)

connectToMongo()
  .then(() => {
    app.listen(port,()=>{
    console.log(`The server is listening on port: ${port}`)
    })
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); 
  });

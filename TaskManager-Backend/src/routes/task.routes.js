import express from 'express'

import {getAllTasks,createTask} from '../controllers/TaskController.js'
// import { getSubTask } from '../controllers/GptController.js'
const router = express.Router()

router.post('/',getAllTasks)
router.post('/createTask',createTask)
export default router;
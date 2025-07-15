import express from 'express'

import {getAllTasks} from '../controllers/TaskController.js'
import { getSubTask } from '../controllers/gptController.js'
const router = express.Router()

router.post('/',getSubTask)

export default router;
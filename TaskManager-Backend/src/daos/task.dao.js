import {Task} from '../models/task.model.js'

const TaskDao = {
    async create(taskData){
        const task = new Task(taskData)
        return await task.save();
    },

    async updateById(id,updateData){
        return await Task.findByIdAndUpdate(id, updateData, { new: true });
    },

    async deleteById(id) {
        return await Task.findByIdAndDelete(id);
    },

    async listAll(filter = {}) {
        return await Task.find(filter).lean();
    },

}

export {TaskDao}
import TodosRepository from "../repository/todo.js";

class Todo {
    static async getAll() {
        return await TodosRepository.getAll();
    }

    static async get(id) {
        return await TodosRepository.get(id);
    }

    static async create({description}) {
        return await TodosRepository.create({description});
    }

    static async update({id, description, completed}) {
        return await TodosRepository.update({id, description, completed});
    }

    static async delete(id) {
        return await TodosRepository.delete(id);
    }
}

export default Todo
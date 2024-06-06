import api from "../services/api.js";


const TodosRepository = {
    async getAll() {
        return await api('/todo/');
    },
    async get(id) {
        return await api(`/todo/${id}`);
    },
    async create({ description }) {
        return await api(`/todo`, {
            method: 'POST',
            body: JSON.stringify({ 
                description: description,
                completed: false
            })
        });
    },
    async update({id, description, completed}) {
        return await api(`/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                description: description,
                completed: completed
            })
        });
    },
    async delete(id) {
        return await api(`/todo/${id}`, {
            method: 'DELETE'
        });
    }
}

export default TodosRepository;
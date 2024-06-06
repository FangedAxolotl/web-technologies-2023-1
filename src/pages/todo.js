import Auth from "../services/auth.js";
import Todo from "../services/todo.js";
import Form from "../components/form.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    const formEl = document.getElementById('todo-form')

    new Form(formEl, {
        'description': (value) => {
            if (value.length < 1) {
                return 'Описание не может быть пустым!'
            }
            return false
        }
    }, async (values) => {
        await Todo.create(values);
        await location.todos();
    })
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}

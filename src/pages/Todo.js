import React from "react";
import Footer from "../components/Footer";

function Todo() {
    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({})
    const [todo, setTodo] = React.useState([]);

    function addTodoHandler(event) {
        event.preventDefault();

        if (edit.id) {
            const updatedId = {
                ...edit,
                activity,
            }
            const editTodoIndex = todo.findIndex((todo) => todo.id === edit.id);
            const updatedTodo = [...todo];
            updatedTodo[editTodoIndex] = updatedId;
            setTodo(updatedTodo)

            return cancelEditHandler();
        }
        if (!activity) {
            return alert('Tidak boleh mengisi apa apa');
        }

        setTodo([...todo, {
            id: Date.now(),
            activity,
            done: false
        }]);
        setActivity('');
    }
    function editTodo(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }
    function removeTodo(todoId) {
        const filteredTodo = todo.filter((todo) => todo.id !== todoId);
        console.log(filteredTodo);
        setTodo(filteredTodo);
        if (edit.id) cancelEditHandler();
    }
    function cancelEditHandler() {
        setEdit({});
        setActivity('')
    }
    function doneTodo(todos) {
        const updatedTodo = {
            ...todos,
            done: todos.done ? false : true
        }
        const doneTodoIndex = todo.findIndex((currentTodo) => currentTodo.id === todos.id);
        const doneTodos = [...todo];
        doneTodos[doneTodoIndex] = updatedTodo;
        setTodo(doneTodos)
        console.log(doneTodos)
    }
    return (
        <>
        <main>
        <div className="game flex flex-col lg:flex-row w-full">
            <div className="game-board flex-grow card rounded-box place-items-center">
            <div className="card card-compact lg:card-normal w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Mau ngapain yaah? hari ini...</h2>
                        <form onSubmit={addTodoHandler}>
                            <input type="text" className="px-5 py-3 mb-3 w-full rounded-md" placeholder="fill me" value={activity} onChange={(e) => setActivity(e.target.value)} />
                    <div className="card-actions justify-end">
                            <button type="submit" className="mx-3 btn-sm lg:btn-md text-white rounded-lg bg-blue-600 shadow-lg active:bg-slate-100 active:shadow-none active:text-slate-800" >{edit.id ? 'Simpan' : 'Tambah'}</button>
                            {edit.id && <button className=" btn-sm lg:btn-md text-white rounded-lg bg-blue-600 shadow-lg active:bg-slate-100 active:shadow-none active:text-slate-800" onClick={cancelEditHandler}>batalkan</button>}
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="game-info grid flex-grow card rounded-box place-items-center">
            {todo.length > 0 ? (<ul>
                {
                    todo.map((item) => {
                        return (
                            <ul className="menu menu-md lg:menu-lg bg-gray-800 hover:bg-none px-3 bg-list my-5 rounded-box">
                            <li className="my-2" key={item.id}>
                                <div className="flex justify-between ">
                                {item.activity} 
                                <div>
                                <input type="checkbox" checked={item.done} className="checkbox" onChange={doneTodo.bind(this, item)}/>
                                <span className="badge badge-primary ">({item.done ? 'dah' : 'beyum'})</span>
                                <button className="mx-3 px-3 py-2 text-white rounded-lg bg-blue-600 shadow-lg active:bg-slate-100 active:shadow-none active:text-slate-800" onClick={editTodo.bind(this, item)}>edit</button>
                                <button className=" px-3 py-2 text-white rounded-lg bg-blue-600 shadow-lg active:bg-slate-100 active:shadow-none active:text-slate-800" onClick={removeTodo.bind(this, item.id)}>hapus</button>
                                </div>
                                </div>
                            </li>
                        </ul>
                        )
                    })
                }
            </ul>) :
                <p className="text-2xl italic font-light my-14">Masukkan kegiatan</p>
            }
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}
export default Todo;
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from "./todoSlice";
import { nanoid } from 'nanoid';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState("");

    function handleTodo() {
        dispatch(addTodo({ id: nanoid(), text: todo }));
        setTodo("");
    }
    return (
        <>
            <div className="flex items-center justify-center flex-col gap-10 pt-10 w-5xl m-auto">
                <h1 className='text-5xl'>Todo App using React Redux</h1>
                <div>
                    <div className='flex gap-5'>
                        <input className='border border-gray-600 rounded-sm px-3 py-2 w-2xl text-2xl' type="text" name="todo" id="todo" placeholder='enter you todos' value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <button className='bg-gray-800 px-5 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-900 transition' onClick={handleTodo}>Add Todo</button>
                    </div >
                    <div className='p-5'>
                        <ul>
                            {
                                todos?.map((todo) => {
                                    return (<li className='list-disc text-2xl'>{todo.text}</li>)
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Todo
import { type TodoId, type ListOfTodos, type Todo as TodoType } from "../types" // forma de importar tipos
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos,
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

// La diferencia entre JSX.Element y React.FC es que JSX.Element es un elemento JSX, mientras que React.FC es un funcional componente React, por lo cual el funcional component nos permite tipar las props de una manera mas sencilla, tal como se ve en la funcion Todos
// De esa manera nos evitamos tener que tipar de una manera mas compleja y menos legible los props haciendo cosas raras dentro del objeto que desestructura las props, cosas como: ({todos} : {todos: ListOfTodos}) y cosas asi nos las evita el tipar una funcion como react.FC

// las simbolos <> en los tipos, es basicamente es como si le estuvieramos pasando parametros a los tipos, es decir, le pasamos un parametro (En este caso la interfaz 'Props') al tipo React.FC, el cual contiene la forma de tipos que tendran las props
// A este tipo React.FC<> se le puede llamar tambien un tipo generico, ya que las props realmente pueden tomar cualquier forma
// Es generico de GENERAL, le estamos diciendo a este functional component la forma que tendran sus props

// Esta es la forma correcta a dia de hoy de tipar un functional component, al menos hasta el video del 20 de junio de 2023 de midudev

// Con React.FC estamos tipando el valor de LA CONSTANTE que contendra el functional component, por esta razon se nos permite tambien tipar las props
export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleted}) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}
                className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    onToggleCompleted={onToggleCompleted} />
                </li>
            ))}
        </ul>
    )
}
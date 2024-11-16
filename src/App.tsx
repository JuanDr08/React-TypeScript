import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, type Todo as TodoType } from "./types"

const mockTodos = [
  {
    id: "1",
    title: 'Buy Milk',
    completed: false
  },
  {
    id: "2",
    title: 'Buy Eggs',
    completed: true
  },
  {
    id: "3",
    title: 'Buy Bread',
    completed: false
  }
]

// Con JSX.Element estamos definiendo el retorno de la funcion, es decir, lo que esta devolvera y por ello este no nos permite tipar las props a diferencia de React.FC
export const App = () : JSX.Element => { // Definimos lo que devuelve la funcion App, lo cual es un elemento jsx

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  // Tipamos la funcion diciendo que en sus parametros vamos a agarrar del tipo TodoType los tipos de 'id; y 'completed' y los asignameros respectivamente a id y completed, ademas la funcion tendra un retorno void, osea vacio
  // Tambien se podria tipar como ({id, completed} : {id: TodoId, completed: TodoCompleted})
  const handleCompleted = ({id, completed} : Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed}
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
      onToggleCompleted={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={todos} />
    </div>
  )
}

export default App

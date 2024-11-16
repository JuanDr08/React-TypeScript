import { type TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType { // las props extienden todos los tipos del todoType y ademas se le agrega una mas la cual es onRemoveTodo
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleted}) => {

    // Es curioso, ya que si usamos el evento directamente en el onClick, typescript si lo infiere como un evento y nos permite acceder a todas sus propiedades, pero si extraemos el evento a una funcion externa, TypeScript no sera capaz de reconocer que es lo que le estamos pasando a la funcion, por lo que nos tocara tipar el parametro como un evento, esto se hace con React.ChangeEvent, esto hasta ahi lo puede llegar a reconocer, pero aun asi pueden haber problemas, ya que hay muchos eventos de cambio, como los de un textArea, checkbox, text, etc, por lo que le debemos especificar el elemento del que proviene este evento para que typescript pueda saber de que le estamos hablando y acceder a sus propiedades, esto se hace con <HTMLInputElement> por ejemplo, por lo que el tipado nos quedaria asi: React.ChangeEvent<HTMLInputElement>
    const handleVHangeCheckbox = (event : React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleted({id, completed: event.target.checked})
    }

    return (
        <div className="view">
            <input 
            className="toggle" 
            type="checkbox" 
            checked={completed}
            onChange={handleVHangeCheckbox} />
            <label>{title}</label>
            <button 
            className="destroy" 
            onClick={() => {onRemoveTodo({id})}} 
            />
        </div>
    )
}
// El archivo types.d.ts es un archivo de tipados, es decir, un archivo donde se definen los tipos de los archivos que estaremos usando en nuestros componentes, la palabra 'types' en realidad puede ser la que querramos, pero por convencion y facil lectura lo mejor seria llamarla 'types', el .d es para reconocer que este archivo es de las declaraciones, es decir, como si estuvieramos diciendo que este archivo no tendra codigo, sino que tendra solo las declaraciones de tipos.

// Realmente el archivo podria llamarse types.ts y funcionaria igual, pero es una forma visual de saber lo que estamos haciendo

export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'> // Esto es una utilidad de typescript que basicamente nos permite extraer el tipo de una propiedad de otro tipo o interfaz

export type TodoId = Pick<Todo, 'id'>

export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault() //criação da tarefa
        if(!value ) return //validação de dados nulos, quandos os campos não estão preenchidos a tarfea não pode ser criada
        console.log(value )
        // se os valores forem preenchidos, vou executar todo e limpar os campos
        addTodo(value, )
        setValue("")
        setCategoria("")

    }
    
    return (
        <div className="todo-form">
            <h2>Adicione temperatura aqui:</h2>
            <form onSubmit={handleSubmit}> {/* a cada vez que o formulario for enviado, a handleSubmit é disparada */}
                <input type="text" placeholder="Digite qual a temperatura(numeros)" value={value} onChange={(e) => setValue(e.target.value)}></input>
                
                <button type="submit">Adicionar temperatura</button>
            </form>
        </div>
    )
}

export default TodoForm


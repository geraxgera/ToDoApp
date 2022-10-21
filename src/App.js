import {useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function App() {
  const [todos, setTodos] = useState([])

  // einfügen
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem ])

    }
  }
// löschen
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

// fertig
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>Aufgaben: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;

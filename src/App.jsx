import { useState } from 'react'
import Input from "./components/Input.jsx"
import List from "./components/List.jsx"

function App() {
  const [data, setData] = useState([])
  let [input, setInput] = useState("")
  function submit(e) {
    e.preventDefault()
    setData([...data,{id:Math.round(Math.random()*10000),list:input}])
    setInput("")
  }
  function remove(id) {
    let filter = data.filter(data => data.id !== id)
    setData(filter)
  }
  return (
    <div className="bg-black p-3 h-screen">
      <h1 className="font-bold text-2xl text-white text-center">Todolist</h1>
      <Input value={input} change={e => setInput(e.target.value)} submit={submit}/>
      <div className="mt-5 flex flex-col gap-3">
        {
          data.map(data => <List list={data.list} click={() => remove(data.id)}/>)
        }
      </div>
    </div>
  )
}

export default App

export default function Input(props) {
  return (
    <form className="flex justify-between mt-4" onSubmit={props.submit}>
      <input type="text" className="border-2 border-white px-2 py-1 rounded bg-black text-white" value={props.value} onChange={props.change}/>
      <button className="border-2 text-white font-bold border-white rounded px-2 py-1" type="submit">Submit</button>
    </form>
    )
}
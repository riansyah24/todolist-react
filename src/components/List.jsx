export default function List(props) {
  return (
    <div className="text-white flex justify-between items-center">
      <p>{props.list}</p>
      <button className="bg-red-600 px-2 py-1 rounded" onClick={props.click}>X</button>
    </div>
    )
}
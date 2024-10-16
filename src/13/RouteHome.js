import { Link } from "react-router-dom" ;

export default function RouteHome() {
  return (
    <div className="w-1/2 grid grid-cols-2 text-2xl mt-5">
      <div>
        <h1 className="flex justify-center items-center
                        text-3xl mb-5 p-5 bg-slate-100">
                         page1
        </h1> 
        <ul>
          <li><Link to='/p1/🍎/사과'>사과 🍎</Link></li>
          <li><Link to='/p1/🍌/바나나'>바나나 🍌</Link></li>
          <li><Link to='/p1/🥕/당근'>당근 🥕</Link></li>
        </ul>
      </div>
      <div>
      <h1 className="flex justify-center items-center
                        text-3xl mb-5 p-5 bg-blue-100">
                          page2
      </h1>
      <ul>
          <li><Link to='/p2?item=🍎&item2=사과'>사과 🍎</Link></li>
          <li><Link to='/p2?item=🍌&item2=바나나'>바나나 🍌</Link></li>
          <li><Link to='/p2?item=🥕&item2=당근'>당근 🥕</Link></li>
        </ul>
      </div>
    </div>
  )
}
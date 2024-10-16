import {useState, useEffect} from "react";

export default function MyBoxFlag({color}) {
  const [flag, setFlag] = useState(false);

  const colorObj = {
    'blue' : {
      'bg500' : 'bg-blue-500',
      'bg50' : 'bg-blue-50',
      'text700' : 'text-blue-700',
      'border600' : 'border-blue-600'
    },
    'orange' : {
      'bg500' : 'bg-orange-500',
      'bg50' : 'bg-orange-50',
      'text700' : 'text-orange-700',
      'border600' : 'border-orange-600'
    },
    'green' : {
      'bg500' : 'bg-green-500',
      'bg50' : 'bg-green-50',
      'text700' : 'text-green-700',
      'border600' : 'border-green-600'
    },
    'yellow' : {
      'bg500' : 'bg-yellow-500',
      'bg50' : 'bg-yellow-50',
      'text700' : 'text-yellow-700',
      'border600' : 'border-yellow-600'
    }
  }

  const obj = colorObj[color]

  const handleClick = () => {
    setFlag(!flag);
  };
  
  useEffect(() => {
    console.log("useEffect =>", flag);
  }, [flag]);

  return (
      <div className = {`w-1/3 flex flex-col justify-center items-center border border-slate-400 rounded-md p-5 m-5 ${flag ? obj['bg500'] : ''}`}>
        <h1 className = {`flex justify-center items-center text-3xl font-bold border border-slate-600 rounded-md ${obj['text700']} p-5 m-5 bg-white`}>
          {color}
        </h1>  
        <div className = {`flex justify-center items-center text-xl font-bold  border ${obj['text700']} ${obj['bg50']} p-5 m-5`}
              onClick = {handleClick}>
          {color} Toggle
        </div>
      </div>
  )
}
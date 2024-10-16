import TailButton from "../UI/TailButton";
import {useState, useRef, useEffect} from "react";

export default function MyRef() {
  //state 변수
  const [valS, setValS] = useState(0);

  //ref 변수
  const valR = useRef(0);   //ref 변수 선언
  const x = useRef();
  const y = useRef();
  const z = useRef();

  //컴포넌트 변수
  let valC = 0;   //바뀌는 변수는 let으로 안바뀌는 변수는 const로 선언


  const handleBClick = () => {
    valC = valC + 1;
    console.log('valC = ', valC);
  }

  const handleSClick = () => {
    setValS(valS+1);
  }

  const handleRClick = () => {
    valR.current = valR.current+1;
    console.log('valR = ', valR)
  }

  const handleAdd = () => {
    if(x.current.value == '') {
      alert('값을 입력하세요');
      x.current.focus();
      return;
    } 
    if(y.current.value == '') {
      alert('값을 입력하세요');
      y.current.focus();
      return;
    } 
    z.current.value = parseInt(x.current.value) + parseInt(y.current.value);
  }

  const handleFocus = () => {
    z.current.value=''
  }

  useEffect(() => {
    x.current.focus();
  }, []);

  return (
    <>
    <div className = "w-4/5 grid grid-cols-3 gap-4 my-10">
      <div className = "text-xl font-bold text-red-800">
        컴포넌트 변수 : {valC}
      </div>
      <div className = "text-xl font-bold text-blue-800">
        state 변수 : {valS}
      </div>
      <div className = "text-xl font-bold text-green-800">
        ref 변수 : {valR.current}   
        {/* //ref함수 사용 방법 */}
      </div>
      <div>
        <TailButton caption='컴포넌트 변수'
                    color='red'
                    handleClick={handleBClick}/>
      </div>
      <div>
        <TailButton caption='state 변수'
                    color='blue'
                    handleClick={handleSClick}/>
      </div>
      <div>
        <TailButton caption='ref 변수'
                    color='green'
                    handleClick={handleRClick}/>
      </div>
    </div>
    <div className = "w-3/5 grid grid-cols-5 gap-2 p-2 bg-slate-200 rounded-md">
      <div className = "flex justify-center items-center text-center">
        <input ref = {x} type = "number" id = "txt1" name = "txt1" className = "h-10 w-20 text-center"
                    onFocus={handleFocus}/>
      </div>
      <div className = "flex justify-center items-center text-center text-2xl font-bold">
        +
      </div>
      <div className = "flex justify-center items-center text-center">
        <input ref = {y} type = "number" id = "txt2" name = "txt2" className = "h-10 w-20 text-center"
                    onFocus={handleFocus}/>
      </div>
      <div className = "flex justify-center items-center text-center">
        <TailButton caption='='
                    color='gray'
                    handleClick={handleAdd}/>
      </div>
      <div className = "flex justify-center items-center text-center">
        <input ref = {z} type = 'number' id = 'txt3' name = 'txt3' readOnly className = "h-10 w-24 text-center" 
                    onFocus={handleFocus}/>
      </div>
    </div>
    </>

  )
}

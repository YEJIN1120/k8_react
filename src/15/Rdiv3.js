import { useEffect, useState } from "react";
import TailButton from "../UI/TailButton";
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Rdiv3() {
  const [x, setX] = useRecoilState(AtomN);
  // const [y, setY] = useRecoilState(AtomN2);
  const y = useRecoilValue(AtomN2);

  const handleUp = () => {
    setX(x + 1);

  }
  const handleDown = () => {
    setX(x - 1);
  }

  useEffect(() => {
    if (!localStorage.getItem('x'))
      setX(0);
    setX(parseInt(localStorage.getItem('x')));
  }, []);

  useEffect(() => {
    localStorage.setItem('x', x);
  }, [x]);

  // useEffect(() => {
  //   setY(x * 2)
  // }, [x]);

  return (
    <div className="w-10/12 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-400 text-lime-900 font-bold">
      <div className="w-full h-10 p-5
                      flex justify-start items-center ">
      
        Rdiv3 : x = {x}, y = {y}
      </div>
      <div className = "w-full grid grid-cols-2 place-itmes-center">
        <TailButton caption = '증가'
                    color = 'blue'
                    handleClick = {handleUp}
                    size = 'w-1/2'/>
        <TailButton caption = '감소'
                    color = 'red'
                    handleClick = {handleDown}
                    size = 'w-1/2'/>
      </div>
    </div>
  )
}
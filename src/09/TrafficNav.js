import TailButton from "../UI/TailButton";
import {useEffect, useState} from 'react';

export default function TrafficNav({title, c, sel, setSel}) {
  // const [sel, setSel] = useState();

  // const c = ['차대사람', '차대차', '차량단독', '철길건널목']

  const handleBtClick = (item) => {
    setSel(item);
  }

  const tags = c.map(item => <TailButton
                        key = {item}
                        caption = {item}
                        color = {item == sel? 'gray' :'blue'}
                        handleClick = {() => handleBtClick(item)}/>);

  // useEffect(() => {
  //   console.log(sel);
  // }, [sel]);
  
  return (
    <div className = "w-10/12 flex justify-between items-center bg-blue-50 p-2 m-2">
      <div className = "w-1/5 flex justify-center items-center text-xl font-bold">
        교통사고 {title}
      </div>
      <div className = "flex justify-end items-center">
        {tags}
      </div>
    </div>
  )

}

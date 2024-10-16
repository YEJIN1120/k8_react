import fooddata from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton';

import {useState} from "react";

export default function FoodMain() {
  const [tags, setTags] = useState();
  
  // 운영주체 분류를 중복 제거하여 버튼으로 만들기
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ',''));
  tm = [...new Set(tm)];

  const bts = tm.map(item => <TailButton
                        key = {item}
                        caption = {item}
                        color = 'blue'
                        handleClick = {() => handleFood(item)} 

                      />);


  // Set()은 리스트 안에 있는 내용 중에 중복되는 것을 제거, ...은 내용을 하나씩 찝어주는것
  console.log(tm)

  const handleFood = (item) => {
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ','') === item);

    tm = tm.map(i => <FoodCard obj={i} key={i.사업장명} />)
    setTags(tm);

  }

  return (
    <div className = "w-full flex flex-col justify-start h-screen">
      <div className = "w-full h-16 bg-blue-100 flex justify-center items-center">
        {bts}
      </div>
      <div className = "w-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-2">
      {tags}
      </div>
    </div>
  )
}

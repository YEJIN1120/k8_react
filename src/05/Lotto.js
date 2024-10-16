import TailButton from "../UI/TailButton"
import TailBall from "./TailBall";

import {useState} from "react"

export default function Lotto() {
  //state변수는 useState Hook으로 만듬
  const [tags, setTags] = useState();   //const는 바꿀 수 없지만 set을 사용하여 바꿀 수 있음

  const handleClick = () => {
    console.log("handleClick")
    let arr = [];

    while(arr.length < 7) {   //length는 개수니까 7까지
      let n = Math.floor(Math.random() * 45) + 1 ;   // 1 ~ 45랜덤수 생성

      if (!arr.includes(n)) arr.push(n);   //있으면 true, 없으면 false   //false를 부정해야 true가 된다.
      //if (arr.indexOf(n) === -1)arr.push(n);   
    }

    //보너스 번호
    const bonus = arr.splice(-1);   //splice는 배열을 잘라내는 코드 (js코드)

    //번호 정렬
    arr.sort((a, b) => a - b);   //숫자를 정렬할때 사용하는 코드 arr.sort((a, b) => a - b); ->오름차순 , 내림차순은 b - a로 변경 (js코드)

    //보너스 번호 추가
    arr = arr.concat(bonus);   //concat은 배열과 배열을 합치는 코드 (js코드)

    //Ball 만들기
    let tm = arr.map(item => <TailBall  key={'b'+item}
                                        n={item}/>);   //map의 결과는 array, map의 개수만큼 array를 만듬

    //plus기호 넣기
    tm.splice(6,0, <div className = "flex justify-center items-center text-3xl mx-2 font-bold" key="sp">+</div>)
    console.log(tm)
    setTags(tm);   // {}를 안쓰고 n만 쓰게 되면 문자n으로 출력
   }

  // const handleClick2 = () => {
  //   console.log('handleClick2')
  // }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center itmes-center mb-10">
        {tags}
      </div>
      <div className="w-full flex justify-center itmes-center mb-10">
      <TailButton caption='로또번호생성' 
                  color='blue'
                  handleClick={handleClick}/>
     </div>
    </div>
  )
}

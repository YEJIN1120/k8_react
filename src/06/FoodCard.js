import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';


import {useState} from "react";
export default function FoodCard({obj}) {
  const[isShow, setIsShow] = useState(false);

  

  const objImg = {
    "광역지원센터" : busan,
    "기초푸드뱅크" : bank,
    "기초푸드마켓" : market
  }

  const handleClick = () => {
    setIsShow(!isShow);
  }

  return (
    <div className = "w-10/12 flex border border-slate-300 rounded-md p-5">
      <div className = "mr-5">
      {/* <img src={obj["구분"] === "광역지원센터" ? busan : 
                  obj["구분"] === "기초푸드뱅크" ? bank : market} 
                  alt = {obj["구분"]}/> */}
      {/* <img src={bank} alt ="기초푸드뱅크"/>
      <img src={market} alt ="기초푸드마켓"/> */}
      <img src = {objImg[obj["구분"]]}
           alt = {obj["구분"]}/>
      </div>

      <div className = "w-4/5 flex flex-col justify-between items-start">
        <div>
          <div className = "text-2xl text-slate-700 font-bold">
           {obj["사업장명"]}
         </div>
          <div className = "text-md text-slate-500 font-bold text">
            {obj["운영주체명"]}
          </div>
          <div className = "text-sm">
            {obj["사업장 소재지"]}   
            {/*중간에 공백이 있으면 대괄호 표기법을 써야함*/}
         </div>
        </div> 
          <div className = "w-full flex justify-end h-8 p-2 items-center bg-slate-600 text-sm text-white font-bold"
                onClick = {handleClick}>
            {isShow ? obj["연락처(대표번호)"] : ''} 
            {/* 삼항연산자 사용 */}
            {/* {isShow && obj["연락처(대표번호"]}  */}
            {/* andand 연산 사용 */}
          </div>
        </div>
      </div>
  )
}

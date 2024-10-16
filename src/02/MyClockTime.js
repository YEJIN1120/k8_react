import { useState, useEffect } from "react";

function MyClockTime() {
  const [cTime, setCTime] = useState(new Date());

  useEffect(() => {
    const tm = setInterval(() => {
      setCTime(new Date());
    }, 1000); 

    return() => {clearInterval(tm)};
  }, []);
  // 생성이 될 때 딱 한 번만 실행됨. (react가 제어)
  // setInterval은 계속 돌기 때문에 종료되게 하기 위해서 clearInterval을 사용한다.
  
  return(
    <div className = "w-full flex justify-center items-center text-2xl font-bold">
      { cTime.toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime;
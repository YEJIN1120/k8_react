import { useEffect, useState } from "react";

export default function BoxOffice() {
  const [cnt, setCnt] = useState();
  
  //맨처음 한번 실행
  useEffect(() => {
    console.log('useEffect []');
    setCnt(100);
  }, []);

  //state 변수 cnt가 변경이 될때
  useEffect(() => {
    console.log('useEffect [cnt]', cnt);
  }, [cnt]);

  //변경이 일어날 때마다 실행
  useEffect(() => {
    console.log('useEffect')
  });


  return (
    <div className = "h-screen flex flex-col justify-center items-center">
      <div>

      </div>
    </div>
  )
}
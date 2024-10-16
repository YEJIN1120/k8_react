import {useEffect, useState, useRef} from "react";
import TailCard from "../UI/TailCard";

export default function Festival() {

  //전체 축제 데이터
  const [tdata, setTdata] = useState([]);

  //구정보
  const [gunm, setGunm] = useState([]);

  //선택된 축제
  const [tags, setTags] = useState([]);

  //select box를 제어
  const gu = useRef();


  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;
    console.log(url);

    const resp = await fetch(url);
    const data = await resp.json();
    console.log("getFetch:", data.getFestivalKr.item);
    setTdata(data.getFestivalKr.item);
  }

  //option이 선택이 되면
  const handleSelect = () => {
    // console.log(gu.current.value);
    //해당하는 구의 축제 추출
    const tm = tdata.filter(item => item.GUGUN_NM === gu.current.value)
                    .map(item => <TailCard
                                    key = {item.UC_SEQ}
                                    imgUrl = {item.MAIN_IMG_THUMB}
                                    title = {item.TITLE}
                                    content = {item.TRFC_INFO}
                                    kw = {item.PLACE}/>
                    );
    setTags(tm);
  }
  
  //컴포넌트 생성시 한 번만 실행
  useEffect(() => {
    getFetchData();
  }, []);

  // tdata가 채워지면 실행
  useEffect(() => {
    let tm = tdata.map(item => item.GUGUN_NM);
    tm = [...new Set(tm)].sort();
    console.log("tm = ", tm)

    tm = tm.map(item => <option key = {item}
                                value = {item}>
                          {item}
                        </option>);
    setGunm(tm);

  }, [tdata]);

  return (
    <div className = "w-full flex flex-col justify-center items-center">
      <div className = "w-10/12 p-5 flex justify-center items-center">
        <h1 className = "w-full flex justify-center text-2xl text-cyan-800 font-bold mb-5">
          부산축제정보
        </h1>
        <select className = "w-1/3 form-select" 
                ref = {gu}
                onChange = {handleSelect}>
            <option value = "">--- 지역 선택 ---</option>
          {gunm}
        </select>
      </div>
      <div className = "w-10/12 p-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {tags}
      </div>
    </div>
  )
}

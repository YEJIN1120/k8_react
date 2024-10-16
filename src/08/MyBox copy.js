import {useState, useEffect} from "react";
export default function MyBox() {
  const [blueFlag, setBlueFlag] = useState(false);
  const [orangeFlag, setOrangeFlag] = useState(false);

  const handleBlue = () => {
    setBlueFlag(!blueFlag);
  };
  
  useEffect(() => {
    console.log("useEffect blue =>", blueFlag);
  }, [blueFlag]);

  const handleOrange = () => {
    setOrangeFlag(!orangeFlag);
  };

  useEffect(() => {
    console.log("useEffect orange =>", orangeFlag);
  }, [orangeFlag]);

  return (
    <div className = "w-full h-full flex justify-center items-center">
      <div className = {`w-1/3 flex flex-col justify-center items-center border border-slate-400 rounded-md p-5 m-5 ${blueFlag ? 'bg-blue-400' : ''}`}>
        <h1 className = "flex justify-center items-center text-3xl font-bold border border-slate-600 rounded-md text-blue-700 p-5 m-5 bg-white">
          Blue
        </h1>
        <div className = "flex justify-center items-center text-xl font-bold  border text-blue-600 bg-blue-50 p-5 m-5"
              onClick = {handleBlue}>
          Blue Toggle
        </div>
      </div>
      <div className = {`w-1/3 flex flex-col justify-center items-center border border-slate-400 rounded-md p-5 m-5 ${orangeFlag ? 'bg-orange-400' : ''}`}>
        <h1 className = "flex justify-center items-center text-3xl font-bold border border-slate-600 rounded-md text-orange-700 p-5 m-5 bg-white">
          Orange
        </h1>
        <div className = "flex justify-center items-center text-xl font-bold border text-orange-600 bg-orange-50 p-5 m-5 "
              onClick ={handleOrange}>
          Orange Toggle
        </div>
      </div>
    </div>
  )
}

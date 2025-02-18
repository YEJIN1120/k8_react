import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil"; 

export default function Rdiv2() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  return (
    <div className="w-full h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-600 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
      flex justify-start items-center ">
       Rdiv2 : x = {x}, y = {y}
      </div> 
    </div>
  )
}
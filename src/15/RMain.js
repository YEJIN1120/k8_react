import Rdiv1 from "./Rdiv1" ;
import { RecoilRoot } from "recoil"

export default function RMain() {
  return (
    <RecoilRoot>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Rdiv1 />
    </div>
    </RecoilRoot>
  )
}

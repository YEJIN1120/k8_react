import MyDiv3 from "./MyDiv3" ;
// export default function MyDiv2(probs) {
export default function MyDiv2({dn1, dn2, dn3}) {
  // console.log(probs)
  return (
    <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-600 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
        {/* {`${probs.dn1} > ${probs.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      
      {/* <MyDiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3} /> */}
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
    </div>
  )
}

// export default function MyDiv3(probs) {
  export default function MyDiv3({dn1, dn2, dn3}) {
    return (
      <div className="w-4/6 h-4/6 
                      flex flex-col justify-center items-center
                      bg-lime-400 text-white font-bold">
        <div className="w-full h-10 p-5
                        flex justify-start items-center ">
          {/* {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`} */}
          {`${dn1} > ${dn2} > ${dn3}`}
        </div>
      </div>
    )
  }
function Hello() {
  let today = new Date();
  today.toLocaleDateString();

  return(
    // jsx는 반드시 하나의 태그만 return
    // fragment tag : <></>
    // class 속성은 반드시 className으로 사용
    <>
    <p className ='p1'>
      Hello React!!
    </p>
    <p className = 'text-4xl text-white'>
      김예진
    </p>
    {/* <p style = {{backgroundColor:'gray', color:'white'}}></p> */}
    <p className = "text-4xl text-cyan-100">
      {new Date().toLocaleTimeString()}
      {/* {today} */}
    </p>
    </>
  );
}

export default Hello;
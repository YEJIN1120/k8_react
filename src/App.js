import './App.css';
import { FaHome } from "react-icons/fa";

// import Hello from './01/Hello' ;
import MyClock from './02/MyClock' ;
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery' ;
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst.js';
import FcstList from './14/FcstList.js';
import RMain from './15/RMain.js';
import Rest from './16/Rest.js'; 

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

function App() {
  return (
      <BrowserRouter>
      <div className="w-full xl:w-10/12 h-screen mx-auto
                      flex flex-col justify-center items-center">
        <header className='w-full h-20
                          flex justify-between items-center
                          bg-slate-200'>
          <p className='text-2xl font-bold p-5'>
            K-digital 8기
          </p>
          <ul className='flex justify-center items-center text-xl font-bold'>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/'>시계</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/lotto'>로또생성기</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/food'>푸드뱅크</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/box'>박스오피스</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/traffic'>교통사고</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/gallery'>관광</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/festival'>축제</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/Fcst'>일기예보</Link>
            </li>
            <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'>
              <Link to='/Rest'>Restfull</Link>
            </li>
            
          </ul>
          <p className='text-4xl font-bold p-5'>
            <Link to='/'><FaHome /></Link>
          </p>
        </header>
        <main className='w-full flex-grow
                        flex flex-col items-center
                        overflow-y-auto'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/Fcst' element={<Fcst />} />
            <Route path='/FcstList' element={<FcstList />} />
            <Route path='/RMain' element={<RMain/>} />
            <Route path='/Rest' element={<Rest/>} />



            {/* <MyDiv1 /> */}
            {/* <MyClock /> */}
            {/* <MyList /> */}
            {/* <Lotto/> */}
            {/* <FoodMain/> */}
            {/* <BoxOffice /> */}
            {/* <MyBox/> */}
            {/* <Traffic /> */}
            {/* <MyRef /> */}
            {/* <Gallery/> */}
            {/* <Festival/> */}
            {/* <RouteMain /> */}
          </Routes>
        </main>
        <footer className='w-full h-20 flex-shrink-0
                          flex justify-center items-center
                          bg-black text-white'>
          <p>K-digital 8기 김예진</p>                  
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;   //export를 해야 import를 할 수 있다.
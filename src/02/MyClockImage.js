import clock from '../img/colock.png' ;

function MyClockImage() {
  return (
    <div className = "w-full flex justify-center items-center">
    <img src={clock} alt="시계" className = 'h-3/5' />
    </div>

  ); 
}

export default MyClockImage;
import './start.css';

// eslint-disable-next-line react/prop-types
const Start = ({onStartClick}) => {
  return (
    <div className="Start border flex flex-col justify-between items-center w-[320px] h-[580px] " >
        <div className="companyName text-center text-[1.6rem] font-bold tracking-wider text-[#222222] ">
            upraised
        </div>
        <div className="circle w-[11rem] h-[11rem] text-[2.2rem] font-extrabold text-[#FF3B3C] rounded-full shadow-lg flex justify-center items-center text-center bg-[#FFFFFF] ">
            Quiz
        </div>
        <button
         onClick={()=> onStartClick()}
         className='btn hover:bg-[#f44749] h-[3rem] w-[80%] rounded-[2rem] mb-6 bg-[#FF3B3F] text-white text-xl font-bold'  
        >
            Start
        </button>
    </div>
  )
}

export default Start
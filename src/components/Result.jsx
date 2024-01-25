/* eslint-disable react/prop-types */

const Result = ({score, length}) => {
  console.log(score)
  return (
    <div className=" bg-[#AF9CF3] w-[320px] h-[620px] flex items-end " >
      <div className=" h-[85%] flex flex-col items-center w-full p-[1rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-white " >
        {/* heading */}
        <div className="heading mt-2 mb-8 text-center text-2xl font-bold ">
          Your result
        </div>
        {/* percentage circle */}
        <div className="  w-[9rem] h-[9rem] border text-[2rem] font-bold  rounded-full shadow-lg flex justify-center items-center text-center bg-[#FFFFFF] ">
            {(score/length)*100}%
        </div>

        <div className="resultBox mt-8 w-full flex flex-col gap-4 ">
          <div className="correct flex flex-row justify-start items-center gap-2 p-3 w-full h-[3rem] rounded-lg bg-slate-200 ">
            <div className="greenCircle w-4 h-4 rounded-full bg-green-500 "></div>
            <span className=" text-sm font-bold " >{score}</span>
            <span className=" text-slate-500 text-sm font-semibold " >Correct</span>
          </div>

          <div className="Incorrect flex flex-row justify-start items-center gap-2 p-3 w-full h-[3rem] rounded-lg bg-slate-200 ">
            <div className="redCircle w-4 h-4 rounded-full bg-red-500 "></div>
            <span className=" text-sm font-bold " >{length - score}</span>
            <span className=" text-slate-500 text-sm font-semibold " > Incorrect </span>
          </div>
        </div>

        <button
         onClick={()=>{window.location.reload()}}
         className='btn mt-16 hover:bg-[#f44749] h-[3rem] w-full rounded-[2rem] mb-6 bg-[#FF3B3F] text-white text-base font-bold'  
        >
            Start Again
        </button>
      </div>
    </div>
  )
}

export default Result
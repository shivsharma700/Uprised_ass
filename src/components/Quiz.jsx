/* eslint-disable react/prop-types */

import { useState } from "react";

const Quiz = ({QuizData, score, setScore, setShowScore}) => {

    const [questionNum, setQuestionNum] = useState(0);  // variable for Question Numbering.
    const [optionClicked, setOptionClicked] = useState(0); // variable for option Selecting.
    const [ans, setAns] = useState();  // variable for Storing the answer, Selected by the User.

    // on clicking of next button this function will make logic .
    function onNextClick(){

        // if option is not selected by the user, here we show the Alert and return from the function.
        if(ans == null){
            alert("please select one option");
            return;
        }

         // updating score
        updateScore() 

        // when moving to the next queston , reset the option to 0.
        setOptionClicked(0)

        // here increasing the queston number on condition base , if question Number greater then the length, then making show result true.
        if(questionNum < QuizData.length-1){
            setQuestionNum(questionNum + 1);
        }else{
            setShowScore(true);
        }
    }

    function updateScore(){
        // updating score here , when we click on Next button then this function will call. "check line number 21"
        if(ans == QuizData[questionNum].correctAnswer){
            setScore(score + 1);
        }
    }


  return (
    <>
    {
        // if QuizData is present then only it show the data, till it show the loader
        QuizData ? (
            <div className=" bg-[#AF9CF3] w-[320px]  flex flex-col  " >
                <div className=" relative top-[3.1rem] flex justify-center  " >
                    {/* question number circle */}
                    <div className=" bg-white italic w-[6.5rem] h-[6.5rem] font-bold rounded-full shadow-lg flex justify-center items-center text-[#999999] " >
                        <div>
                        <span className=" text-[#000000] text-[3rem] " >{questionNum + 1}</span>/{QuizData.length}
                        </div>
                    </div>
                </div>
                <div className=" h-full w-full p-[1rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-white " >
                    <div className="mcq mt-[3.6rem] ">
                        {/* question  */}
                        <div className="question mb-2 text-[18px] font-bold text-[#000000] " >
                            {QuizData[questionNum]?.question.text}             
                        </div>
                        {/* options */}
                        <div className="options">
                            {
                                QuizData[questionNum].incorrectAnswers.map((option,idx) => (
                                    <button 
                                        key={idx} 
                                        className={`option ${optionClicked == idx+1?" border-green-600 ":null}
                                                    btn w-full  mt-3 mb-3 h-[4rem] font-[500] text-[14px]
                                                    rounded-lg gap-3 px-4 bg-slate-100 flex justify-start  
                                                    items-center `
                                        }
                                        // Clicking on option, we will change option and store the ans
                                        onClick={()=>{setOptionClicked(idx + 1), setAns(option) }}
                                    >
                                        <input 
                                          type="radio" 
                                          name="option" 
                                          className="radio radio-success"
                                          checked={optionClicked == idx+1 ? true : false}
                                          readOnly
                                        /> 
                                        <span>{option}</span>
                                    </button>
                                ))
                            }
                        </div>
                        <button
                         className='btn hover:bg-[#f44749] h-[3rem] w-full rounded-[2rem] mb-6 bg-[#FF3B3F] text-white text-base font-bold'  
                         onClick={onNextClick} // here we call the onNextClick funtion, on Clicking of Next button
                        >
                            {/* At last question Text will Change to "SUBMIT" */}
                            {(questionNum == QuizData.length-1) ? "SUBMIT" : "NEXT"}
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            // loader
            <span className="loading loading-infinity loading-lg"></span>
        )
    }
    </>
  )
}

export default Quiz
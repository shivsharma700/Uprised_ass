import axios from 'axios'
import { useState } from "react"

import Quiz from "./Quiz";
import Result from "./Result";
import Start from "./Start";

const Home = () => {

    const [showStart, setShowStart] = useState(true);  // variable for show Start quiz
    const [showScore, setShowScore] = useState(false); // variable for show Result
    const [data, setData] = useState();    // variable for storing MCQ Data
    const [score, setScore] = useState(0);  // variable for collecting Score

    async function fetchData(){
        // fetching MCQ data (question and answers);
        const Response = await axios.get("https://the-trivia-api.com/v2/questions");
        const temp = Response?.data;

        // Api is sending 10 question in Array, removing 5 question from last.
        for(let i = 0; i < 5; i++){
            temp.pop();
        }

        // Correct option is not added in the option list, Adding manualy here
        for(let i = 0; i < temp.length; i++){
            let correctOption = temp[i].correctAnswer;
            temp[i].incorrectAnswers.push(correctOption);
        }
        setData([...temp]);
    }

    function onStartClick(){
        // on Clicking of start button making visibility of Start page false, starting Quiz and calling fetchData function.
        setShowStart(false);
        fetchData();
    }

  return (
    <div className=" h-[100vh] w-[100vw] font-sans bg-slate-100 flex justify-center items-center " >
      {
         // if setShowStart is true then Start page will show on Screen else Quiz or Result page will show
        showStart ? (                         
            // passing onStartClick in Start component for pagination
            <Start onStartClick={onStartClick} /> 
        ) : (
            // if showScore is true then Result page will show on Screen else Quiz.
            showScore ? (
                <Result score={score} length={data.length} />  // Result component
            ) : (
                // passing MCQ data in Quiz component
                <Quiz QuizData={data} score={score} setScore={setScore} setShowScore={setShowScore} />
            )   
        )
      }
    </div>
  )
}

export default Home
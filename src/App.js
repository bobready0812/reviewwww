import {useEffect, useState} from 'react';
import './App.css';

function App() {
  
 
    
    const[right, setRight] = useState(false);
    const [answer, setAnswer] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [text, setText] = useState("더블클릭")

    
    
    
    function changeRightAnswer () {
      setRightAnswer(Math.floor(Math.random()*10))
      setText("정답이 정해졌습니다!")
      console.log(rightAnswer);
    }
    
     const submit = (e) => {
      e.preventDefault();
      
      console.log(rightAnswer);
      if (Number(answer) === Number(rightAnswer)) {
        setRight("you win");
       
      } else {
        setRight("you lose")
      }
    }

   
    
    
     return (<>
        <div>
          <h1>0~9까지의 숫자를 골라주세요</h1>
          <div>
           <button onClick={changeRightAnswer}> {text} </button>
        </div>
          <form onSubmit={submit}>
            <div>
              <h1> 숫자 선택</h1>
              <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </div>
            <button type="submit">확인</button>
          </form>
          <p>{right}</p>
        </div>
        
        </>
      );
    }
    
    

  


export default App;

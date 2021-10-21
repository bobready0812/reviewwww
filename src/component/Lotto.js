import { Fragment } from "react/cjs/react.production.min";
import { useState  } from "react";

export default function Lotto () {

let arr1 = [];
let arr2 = [];    

function handleClick () {
    
    let i = 0;
    while (i < 8) {
    let n = Math.floor(Math.random() * 10 );
     arr1.push(n);
     ++i
    }
    console.log(arr1);
    
}

function handleClick2 () {
    
    let i = 0;
    while (i < 8) {
    let n = Math.floor(Math.random() * 10 );
     arr2.push(n);
     ++i
    }
    console.log(arr2);
    
}
return(

<Fragment>
<h1> 숫자 </h1>
<button onClick={handleClick}>뽑기</button>
<h1>숫자</h1>
<button onClick={handleClick2}>뽑기</button>

</Fragment>


)


}
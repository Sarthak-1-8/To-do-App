


function buttonadder(currState){

    const container =document.querySelector(".Container");

    const butt = document.createElement("button");
    butt.innerHTML=currState;
    console.log(State)

    butt.onclick=()=>{
        // let cnt= butt.innerHTML.split(" ")[1]
        // cnt++
        // butt.innerHTML=`Counter ${cnt}`;
        let cnt= State[0].button.split(" ")[1]
        cnt++;
        console.log(State)
        State[0].button=`Counter ${cnt}`;
        rerenderbutton()
        // staterender(State)
    }
    container.appendChild(butt);

}

function staterender(state){
    const buttonState= state[0].button;
    buttonadder(buttonState);


}

//initial state

let State= [
    {
        button:"Counter 90"
    }
]

staterender(State)




function rerenderbutton(){
    const thebutt= document.querySelector("button");
    let newcount= State[0].button.split(" ")[1]


    thebutt.innerHTML=`Counter ${newcount}`;

}






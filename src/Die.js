export default function Die (props){
    const styles = {
        background: props.isHeld ? "#59E391" : "#FFFFFF"
    }
    let diceClass = ["gg-dice-1",
    "gg-dice-2",
    "gg-dice-3",
    "gg-dice-4",
    "gg-dice-5",
    "gg-dice-6"
    ]
    // const dice = document.getElementsById("die")
    // if(props.value === 1){
    //     dice.classList.add("gg-dice-1")
    //  }else if(props.value === 2){
    //     dice.classList.add("gg-dice-2")
    //  }else if(props.value === 3){
    //     dice.classList.add("gg-dice-3")
    //  }else if(props.value === 4){
    //     dice.classList.add("gg-dice-4")
    //  }else if(props.value === 5){
    //     dice.classList.add("gg-dice-5")
    //  }else {
    //     dice.classList.add("gg-dice-6")
    //  }

    return(
        <div className={diceClass[props.value-1]} id="die" style={styles} onClick={props.holdDice}>

        </div>
    )
}
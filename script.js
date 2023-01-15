

const calculate = document.getElementById("calculate");
calculate.addEventListener('click',()=>{

    const billAmount = +document.getElementById("billAmount").value;
    const serviceQuality = document.getElementById("serviceQuality");
    const numOfpeople = +document.getElementById("numOfpeople").value;
    const selectedOptionIndex = serviceQuality.selectedIndex;
    
    const selectedOption = serviceQuality[selectedOptionIndex];
    const selectedOptionValue = +(selectedOption.value);
    
    // console.log(typeof(selectedOptionValue));
    
    
    
    if(billAmount != 0 && numOfpeople != 0 && selectedOptionIndex != 0){
    
    const total = (billAmount*selectedOptionValue)/numOfpeople;
        
        document.getElementById('total').innerText = total.toFixed(2);
        document.getElementById('total').style.fontSize = "20px";
    }else{
        alert("please enter values");
    }
    
   
    
    billAmount = 0;
    selectedOption = serviceQuality[0];
    numOfpeople = "";
   
    


})
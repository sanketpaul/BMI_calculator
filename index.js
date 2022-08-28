let buttonhandel=()=>{
    let he=document.getElementById('he').value/100;
    let we=document.getElementById('we').value
    let sum=(we/(he*he)).toFixed(2)
    console.log(sum)
    document.getElementById('calculate_result').value=sum;

    
}
function logMessage(msg){
    console.log(`Msg : ${msg}.`);
}

function logMessageWithTime(msg){
    let date = new Date();
    console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} : ${msg}.`);
}

function logIndex0to5(){
    for (let i =0;i<5;i++){
        if(i === 0) logMessage(green);
        else if((i%2) === 0) logMessage(red);
        else logMessage(blue);
    }
}

function throwErr(msg){

    form.insertAdjacentHTML('afterbegin', `
            <p id="err" style="color: ${red}">
                ${msg}
            </p>
    `)

    throw msg;
}
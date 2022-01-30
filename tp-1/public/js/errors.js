function throwErr(msg){

    FORM.insertAdjacentHTML('afterbegin', `
            <p id="err" style="color: ${RED}">
                ${msg}
            </p>
    `)

    throw msg;
}
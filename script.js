let btn = document.querySelector("#button");
let input = document.querySelector("#input");
let alertEl = document.querySelector("#alert-msg");
let alertBox = document.querySelector(".alert-container")
let copyIcon = document.querySelector(".fa-copy");

copyIcon.addEventListener("click",()=>{
    copyPassword();

    if(input.value){
        alertBox.classList.remove("active");
    setTimeout(()=>{
        alertBox.classList.add("active")
    },2000)
    }
    
})

btn.addEventListener("click",()=>{
    generatePass();
})

const generatePass = () => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*abcdefghijklmnopqrstuvwxyz";
    const passwordlen = 14;
    let password = "";
    for(let i=0;i<passwordlen;i++){
        let randomNum= Math.floor(Math.random() * char.length) ;
        password += char.substring(randomNum,randomNum+1)
        // console.log(password);
    }
    input.value=password;
    alertEl.innerText= " Coppied " + password;
}

const copyPassword = () =>{
    input.select();
    input.setSelectionRange(0,14);
    navigator.clipboard.writeText(input.value)
}




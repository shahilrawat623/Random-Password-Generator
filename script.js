let btn = document.querySelector("#button");

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
}

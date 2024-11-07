const imgOff = document.getElementById("img-off");
console.log(imgOff);

const btnOff = document.getElementById("btn-off");
console.log(btnOff);

btnOff.addEventListener ("click", function(){
    if(btnOff.classList.contains("on")){
        btnOff.classList.remove("on");
        imgOff.src = "../img/yellow_lamp.png";
        btnOff.innerHTML = "SPEGNIMI TI PREGO! MI STO SURRISCALDANDO!!";
    }else{
      btnOff.classList.add("on");
      imgOff.src = "../img/white_lamp.png";
      btnOff.innerHTML = "ACCENDIMI DAI!";
    }
})



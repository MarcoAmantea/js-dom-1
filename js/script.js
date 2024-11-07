const imgOff = document.getElementById("img-off");
console.log(imgOff);

const btnOff = document.getElementById("btn-off");
console.log(btnOff);

btnOff.addEventListener ("click", function(){
    imgOff.src = "../img/yellow_lamp.png"
    btnOff.innerHTML = "SPEGNI LA LUCE!"
})



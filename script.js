let operasi = "";
let bil1 = 0;
let bil2 = 0;

const input = document.getElementById("input-nilai");
const tombol = document.getElementsByClassName("tombol");
const reset = document.getElementById("reset");

for (let i = 0; i < tombol.length; i++) {
  tombol[i].addEventListener("click", function () {
    if (
      tombol[i].innerText === "+" ||
      tombol[i].innerText === "-" ||
      tombol[i].innerText === "x" ||
      tombol[i].innerText === "/"
    ) {
      operasi = tombol[i].innerText;
      bil1 = input.value;
      input.value = 0;
    } else if (tombol[i].innerText === "=") {
      bil2 = input.value;

      if(operasi === "+") input.value = parseInt(bil1) + parseInt(bil2);
      if(operasi === "-") input.value = parseInt(bil1) - parseInt(bil2);
      if(operasi === "x") input.value = parseInt(bil1) * parseInt(bil2);
      if(operasi === "/") parseFloat(input.value) = parseInt(bil1) / parseInt(bil2);


    }
    else{
        const currentValue = parseInt(input.value);
        if(currentValue===0){
            input.value = tombol[i].innerText
        }else{
            input.value = currentValue + tombol[i].innerText
        }
    }
  });
}


reset.addEventListener("click",()=>{
    operasi = ""
    bil1 = 0
    bil2 = 0
    input.value = 0
})


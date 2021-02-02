var x = 1;
var original = 999;
var tomato = 1999;
var broccoli = 9999;
var variable = 999;

let productNum = document.querySelector(".product-num");
productNum.innerHTML = x;
document.querySelector(".totalPrice").innerHTML = variable + "$";

document.querySelector(".min").addEventListener("click", () => {
  if (x < 1) {
    document.querySelector(".warning").innerHTML = "Hey! What are you doing?";
    setTimeout(() => {
      document.querySelector(".warning").innerHTML = "&nbsp;";
    }, 2000);
  } else {
    x--;
    productNum.innerHTML = x;
    document.querySelector(".totalPrice").innerHTML = x * variable + "$";
  }
});
document.querySelector(".plus").addEventListener("click", () => {
  x++;
  productNum.innerHTML = x;
  document.querySelector(".totalPrice").innerHTML = x * variable + "$";
});

document.getElementById("flavors").addEventListener("change", () => {
  let e = document.getElementById("flavors").value;
  if (e === "original") {
    document.querySelector(".price").textContent = original + "$";
    variable = original;
    document.querySelector(".totalPrice").innerHTML = variable*x + "$";
    document.querySelector(".product img").setAttribute("src", "img/licorice.jpg")
  } else if (e === "tomato") {
    document.querySelector(".price").textContent = tomato + "$";
    variable = tomato;
    document.querySelector(".totalPrice").innerHTML = variable*x + "$";
    document.querySelector(".product img").setAttribute("src", "img/tomato.jpg")
  } else if (e === "broccoli") {
    document.querySelector(".price").textContent = broccoli + "$";
    variable = broccoli;
    document.querySelector(".totalPrice").innerHTML = variable*x + "$";
    document.querySelector(".product img").setAttribute("src", "img/broccoli.jpg")
  }
});

document.querySelector(".product .btn").addEventListener("click", () =>{
  document.querySelector(".orderPopUp").style.display = "block";
})
document.querySelector(".orderPopUp .btn").addEventListener("click", () =>{
  document.querySelector(".orderPopUp").style.display = "none";
})

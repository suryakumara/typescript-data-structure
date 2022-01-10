const button = document.querySelector("button")!;

let userName = "Surya";
function clickHandler(message: string) {
  alert("Clicked !" + message);
}
if (button) {
  
  button.addEventListener("click", clickHandler.bind(null, "You are welcome"));
}
// noImplicitAny => harus memasukkan type of data pada parameter function

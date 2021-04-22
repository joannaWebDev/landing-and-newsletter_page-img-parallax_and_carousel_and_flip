
//NEWSLETTEER
const getUserName = () => {
  const user = prompt("Please enter your name");
  if (user != null ) {
    document.getElementById("user-name").innerHTML =
    `Hola, ${user}.`;   
  }
}

window.onload=getUserName();

const openForm = () => {
  document.getElementById("myForm").style.display = "block";
}

const closeForm = () =>{
  document.getElementById("myForm").style.display = "none";
}
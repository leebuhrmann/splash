const myImage = document.getElementById("scripting");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/coffeecup-illustration-circle-crop.png") {
    myImage.setAttribute("src", "images/hermes-circle-croped.png");
  } else {
    myImage.setAttribute("src", "images/coffeecup-illustration-circle-crop.png");
  }
};
let firstButton = document.querySelector(".download1");
let secondButton = document.querySelector(".download2");

let firstArrow = document.querySelector(".arrow1");
let secondArrow = document.querySelector(".arrow2");

let swapArrow1 = document.createElement("div");
swapArrow1.classList.add("movingArrow1");

let swapArrow2 = document.createElement("div");
swapArrow2.classList.add("movingArrow2");

let counter = 0;

function timeouts1() {
  setTimeout(function () {
    firstButton.removeChild(swapArrow1);
  }, 250);
  setTimeout(function () {
    swapArrow2.style.display = "initial";
  }, 250);
  setTimeout(function () {
    swapArrow2.style.display = "none";
  }, 500);
  setTimeout(function () {
    firstButton.removeChild(swapArrow2);
  }, 500);
  setTimeout(function () {
    firstButton.appendChild(firstArrow);
  }, 500);
}

function timeouts2() {
  setTimeout(function () {
    secondButton.removeChild(swapArrow1);
  }, 250);
  setTimeout(function () {
    swapArrow2.style.display = "initial";
  }, 250);
  setTimeout(function () {
    swapArrow2.style.display = "none";
  }, 500);
  setTimeout(function () {
    secondButton.removeChild(swapArrow2);
  }, 500);
  setTimeout(function () {
    secondButton.appendChild(secondArrow);
  }, 500);
}

function downloadHandler(event) {
  if (counter === 0) {
    if (event.currentTarget.classList.contains("download1")) {
      firstButton.removeChild(firstArrow);
      firstButton.appendChild(swapArrow1);
      firstButton.appendChild(swapArrow2);
      timeouts1();
      swapArrow1.animate([{ transform: "translateY(80px)" }], {
        duration: 250,
      });
      swapArrow2.animate([{ transform: "translateY(140px)" }], {
        duration: 500,
      });
      counter++;
    } else if (event.currentTarget.classList.contains("download2")) {
      secondButton.removeChild(secondArrow);
      secondButton.appendChild(swapArrow1);
      secondButton.appendChild(swapArrow2);
      timeouts2();
      swapArrow1.animate([{ transform: "translateY(80px)" }], {
        duration: 250,
      });
      swapArrow2.animate([{ transform: "translateY(140px)" }], {
        duration: 500,
      });
      counter++;
    } else window.alert("something went wrong");
  }
}

function counterSubtract() {
  if (counter === 1) {
    setTimeout(function () {
      counter--;
    }, 600);
  }
}

firstButton.addEventListener("mouseenter", downloadHandler);
secondButton.addEventListener("mouseenter", downloadHandler);
firstButton.addEventListener("mouseleave", counterSubtract);
secondButton.addEventListener("mouseleave", counterSubtract);

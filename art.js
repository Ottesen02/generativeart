window.addEventListener("DOMContentLoaded", start);

let box = document.createElement("div");
let circle = document.createElement("div2");

function start() {
  console.log("Lets go");
  artwork1();

  function artwork1() {
    for (let i = 100; i <= 300; i += 20) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("box");
      document.querySelector("#artwork1").appendChild(box);
      box.style.height = i + "px";
      box.style.width = i + "px";
    }
    artwork2();
  }

  function artwork2() {
    for (let i = 0; i <= 90; i += 10) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("box");
      document.querySelector("#artwork2").appendChild(box);
      box.style.transform = "rotate(" + i + "deg)";
    }
    artwork3();
  }

  function artwork3() {
    for (let i = 0; i <= 200; i += 10) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("circle");
      document.querySelector("#artwork3").appendChild(box);
      box.style.height = i + "px";
      box.style.width = i + "px";
    }
    artwork4();
  }

  function artwork4() {
    for (let i = -90; i <= 90; i += 20) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("box");
      document.querySelector("#artwork4").appendChild(box);
      box.style.transform = "translateX(" + i + "px) translateY(" + i + "px)";
    }
    artwork5();
  }

  function artwork5() {
    for (let i = 1; i <= 512; i *= 2) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("circle");
      document.querySelector("#artwork5").appendChild(box);
      box.style.height = i + "px";
      box.style.width = i + "px";
    }
    artwork6();
  }

  function artwork6() {
    for (let i = -20; i <= 45; i += 5) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("circle");
      document.querySelector("#artwork6").appendChild(box);
      box.style.transform = `translate(${i - 50}px) rotate(${i * 4}deg)`;
    }
    artwork7();
  }

  function artwork7() {
    for (let i = 0; i <= 200; i += 10) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("circle");
      document.querySelector("#artwork7").appendChild(box);
      box.style.height = i + "px";
      box.style.width = i + "px";
      box.style.transform = `translateX(${i}px) translateY(-${i / 2}px)`;
    }
    artwork8();
  }

  function artwork8() {
    for (let i = 50; i <= 200; i += 10) {
      console.log(i);
      box = document.createElement("div");
      box.classList.add("box");
      document.querySelector("#artwork8").appendChild(box);
      box.style.height = i + "px";
      box.style.width = i + "px";
      box.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
    }
    artwork9();
  }

  function artwork9() {
    for (let i = 50; i <= 200; i += 30) {
      console.log(i);
      box = document.createElement("div");
      circle = document.createElement("div2");
      box.classList.add("box");
      circle.classList.add("circle");
      document.querySelector("#artwork9").appendChild(box);
      document.querySelector("#artwork9").appendChild(circle);
      box.style.height = i + "px";
      box.style.width = i + "px";
      circle.style.height = i + "px";
      circle.style.width = i + "px";
    }
  }
}

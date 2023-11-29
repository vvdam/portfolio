//new vue ({

//   el:'#test'
//})

const cursor2 = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor2.setAttribute(
    "style",
    "top:" + (e.pageY - 40) + "px; left:" + (e.pageX - 5) + "px;"
  );
});

const txtAnime = document.querySelector("h1");

new Typewriter(txtAnime, {
  loop: true,
  deleteSpeed: 20,
})
  .changeDelay(100)
  .typeString("*Bonjour*")
  .pauseFor(300)
  .deleteChars(8)
  .typeString("Hello*")
  .pauseFor(300)
  .deleteChars(6)
  .typeString("Halo*")
  .pauseFor(300)
  .deleteChars(5)
  .start();

const txtAnime2 = document.querySelector("h2");

new Typewriter(txtAnime2, {
  deleteSpeed: 20,
  loop: true,
})
  .changeDelay(50)
  .typeString("/Adam Maaloul développeur")
  .pauseFor(800)
  .typeString('<span style="color: #c88cff "> html')
  .pauseFor(400)
  .deleteChars(4)
  .typeString('<span style="color: #4285F4 "> css')
  .pauseFor(400)
  .deleteChars(3)
  .typeString('<span style="color: #008F11 "> Javascript')
  .pauseFor(400)
  .deleteChars(10)
  .typeString('<span style="color: #FBBC05 "> Front-end/')
  .pauseFor(1500)
  .start();

const index2Btn = document.getElementById("index2btn");

index2Btn.addEventListener("click", () => {
  window.location.href = "index2.html";
  console.log("test");
});

const txtAnime3 = document.getElementsByClassName("TYPEWRIT3");

new Typewriter(txtAnime3, {
  deleteSpeed: 20,
  loop: true,
});

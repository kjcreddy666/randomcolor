let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let random = () => (Math.floor(Math.random()*255));
    let heading = document.querySelector('h1');
    let box = document.querySelector("div");
    let randomColor = `rgb(${random()},${random()},${random()})`;
    console.log(randomColor);
    heading.innerText = randomColor;
    box.style.backgroundColor = randomColor;
    box.innerText = "This color is applied";
});
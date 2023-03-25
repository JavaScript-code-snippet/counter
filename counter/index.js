let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const sub = document.querySelector("h2");
const showbtn = document.querySelector(".shobtn");
const btncont = document.querySelector(".button-container");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#865DFF";
    }
    if (count < 0) {
      value.style.color = "#191825";
    }
    if (count === 0) {
      value.style.color = "#E384FF";
    }
    if (count % 10 === 0) {
      sub.innerText = `${count}을 넘었습니다.`;
      sub.style.fontSize = `${Number(count) + "px"}`;
    }
    value.innerHTML = count;
  });
});

const increment = document.getElementById("increment"),
  reset = document.getElementById("reset"),
  decrement = document.getElementById("decrement"),
  result = document.getElementById("result");

let x = 0;
result.textContent = x;
function counter(flag) {
  if (flag == "decrease") {
    if (x <= 0) {
      x = 0;
      return;
    }
    x--;
  } else if (flag == "reset") {
    x = 0;
  } else {
    x++;
  }
  result.textContent = x;
}

increment.onclick = counter;
reset.onclick = () => counter("reset");
decrement.onclick = () => counter("decrease");

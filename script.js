const result = document.getElementById("result");

function insert(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}

// disable operator keys at the beginning
document.getElementById("add").disabled = true;
document.getElementById("subtract").disabled = true;
document.getElementById("multiply").disabled = true;
document.getElementById("divide").disabled = true;

// enable operator keys after a number is entered
document.querySelectorAll(".key:not(.equals, .zero)").forEach((key) => {
  key.addEventListener("click", () => {
    if (result.value === "") {
      document.getElementById("add").disabled = true;
      document.getElementById("subtract").disabled = true;
      document.getElementById("multiply").disabled = true;
      document.getElementById("divide").disabled = true;
    } else {
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
    }
  });
});
document.getElementById('TenteNovamente').addEventListener('click', function() {
    if (navigator.onLine) {
        window.location.href = "index.html";
    } else {
        console.log("offline")
        alert("Você está offline.");
    }
});
window.addEventListener('load', function() {
  if (!navigator.onLine) {
    window.location.href = "index.html";
  } else {
    window.location.href = "loading.html";
  }
});


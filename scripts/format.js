function pretty(input) {
  document.getElementById('jsonInput').value = JSON.stringify(JSON.parse(input), null, 4)
}

function clear() {
  document.getElementById('jsonInput').value = "";
}
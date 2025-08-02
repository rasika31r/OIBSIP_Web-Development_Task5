
  function convertTemp() {
  const degrees = parseFloat(document.getElementById('degrees').value);
  const type = document.getElementById('type').value;
  const resultField = document.getElementById('result');

  // Check if input is a number
  if (isNaN(degrees)) {
    resultField.value = "Invalid input";
    return;
  }

  // Disallow negative Kelvin input
  if (type === "Kelvin" && degrees < 0) {
    resultField.value = "Kelvin cannot be negative";
    return;
  }

  let result = "";

  switch (type) {
    case "Celsius":
      result = `${(degrees * 9 / 5 + 32).toFixed(4)} °F`;
      break;
    case "Fahrenheit":
      result = `${((degrees - 32) * 5 / 9).toFixed(4)} °C`;
      break;
    case "Kelvin":
      result = `${(degrees - 273.15).toFixed(4)} °C`;
      break;
    default:
      result = "Unknown type";
  }

  resultField.value = result;

}

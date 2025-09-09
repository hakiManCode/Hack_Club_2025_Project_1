// Function to calculate the area of a circle

function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  const decplaces = parseInt(document.getElementById("decimalplaces").value);

  if (isNaN(radius) || radius <= 0) {
    document.getElementById("circlearea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else if (isNaN(decplaces) || decplaces < 0 || !Number.isInteger(decplaces)) {
    document.getElementById("circlearea").innerHTML = "<span style='color:red;'>ERROR: Invalid decimal places input.</span>";
  } else {
    const circleArea = Math.PI * Math.pow(radius, 2);
    document.getElementById("circlearea").innerHTML = `The area of the circle is about <b>${circleArea.toFixed(decplaces)}</b> units².`;
  }
}

globalThis.calculateCircleArea = calculateCircleArea;

// Function to calculate the area of a square

function calculateSquareArea() {
  const side = parseFloat(document.getElementById("side").value);

  if (isNaN(side) || side <= 0) {
    document.getElementById("squarearea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const squareArea = Math.pow(side, 2);
    document.getElementById("squarearea").innerHTML = `The area of the square is <b>${squareArea}</b> units².`;
  }
}

globalThis.calculateSquareArea = calculateSquareArea;

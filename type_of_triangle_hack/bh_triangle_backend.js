// Function to calculate triangle's area

function areaTriangle() {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    document.getElementById("trianglearea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const triArea = base * height * 0.5;

    document.getElementById("trianglearea").innerHTML = `The area of the triangle is <b>${triArea}</b> units².`;
  }
}

globalThis.areaTriangle = areaTriangle;
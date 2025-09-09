// Calculates the area of a regular polygon

function areaRegPoly() {
  const numSides = parseInt(document.getElementById("numSides").value);
  const sideLength = parseFloat(document.getElementById("sideLength").value);

  if (isNaN(numSides) || isNaN(sideLength) || numSides < 3 || sideLength <= 0 || !Number.isInteger(numSides)) {
    document.getElementById("regpolyarea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const regPolyArea = (numSides * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / numSides));
    document.getElementById("regpolyarea").innerHTML = `The area of the regular polygon is <b>${regPolyArea}</b> units².`;
  }
}

globalThis.areaRegPoly = areaRegPoly;
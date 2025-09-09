// Calculate the area of an equilateral triangle given the length of its side

function equiTriArea() {
  const side = parseFloat(document.getElementById("side").value);

  if (isNaN(side) || side <= 0) {
    document.getElementById("equitriarea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const equiTriArea = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    document.getElementById("equitriarea").innerHTML = `The area of the equilateral triangle is <b>${equiTriArea}</b> units².`;
  }
}

globalThis.equiTriArea = equiTriArea;
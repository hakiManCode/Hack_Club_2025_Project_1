// Calculates the area of a trapezoid

function areaTrapezoid() {
  const base1 = parseFloat(document.getElementById("base1").value);
  const base2 = parseFloat(document.getElementById("base2").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(base1) || isNaN(base2) || isNaN(height) || base1 <= 0 || base2 <= 0 || height <= 0) {
    document.getElementById("trapezoidarea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const trapArea = 0.5 * (base1 + base2) * height;
    document.getElementById("trapezoidarea").innerHTML = `The area of the trapezoid is <b>${trapArea}</b> units².`;
  }
}

globalThis.areaTrapezoid = areaTrapezoid;
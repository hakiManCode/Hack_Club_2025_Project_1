// Calculates the area of an ellipse given its semi-major and semi-minor axes

function areaEllipse() {
  const aaxis = parseFloat(document.getElementById("aaxis").value);
  const baxis = parseFloat(document.getElementById("baxis").value);

  if (isNaN(aaxis) || isNaN(baxis) || aaxis <= 0 || baxis <= 0) {
    document.getElementById("ellipsearea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const ellipseArea = Math.PI * aaxis * baxis;
    document.getElementById("ellipsearea").innerHTML = `The area of the ellipse is <b>${ellipseArea}</b> units².`;
  }
}

globalThis.areaEllipse = areaEllipse;
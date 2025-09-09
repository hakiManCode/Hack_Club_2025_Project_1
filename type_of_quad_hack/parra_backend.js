// Calculate the area of a quadrilateral

function areaParra() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById("parraarea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else {
    const quadArea = length * width;
    
    document.getElementById("parraarea").innerHTML = `The area of the quadrilateral is <b>${quadArea}</b> units².`
  }
}

globalThis.areaParra = areaParra;


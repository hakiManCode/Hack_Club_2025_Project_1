// Using heron's formula to calculate the area of an SSS triangle

function sssTriArea() {
  const sa = parseFloat(document.getElementById("sidea").value);
  const sb = parseFloat(document.getElementById("sideb").value);
  const sc = parseFloat(document.getElementById("sidec").value);

  if (isNaN(sa) || isNaN(sb) || isNaN(sc) || sa <= 0 || sb <= 0 || sc <= 0) {
    document.getElementById("ssstriarea").innerHTML = "<span style='color:red;'>ERROR: Invalid input(s).</span>";
  } else if (sa + sb <= sc || sa + sc <= sb || sb + sc <= sa) {
    document.getElementById("ssstriarea").innerHTML = "<span style='color:red;'>ERROR: The given side lengths do not form a valid triangle.</span>";
  } else {
    const s = (sa + sb + sc) / 2;
    const sssArea = Math.sqrt(s * (s - sa) * (s - sb) * (s - sc));
    document.getElementById("ssstriarea").innerHTML = `The area of the triangle is <b>${sssArea}</b> units².`;
  }
}

globalThis.sssTriArea = sssTriArea;
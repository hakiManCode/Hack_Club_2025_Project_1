// Calculate the area of the triangle based on the length and hypotenuse

function hlTriArea() {
  const leg = parseFloat(document.getElementById("leg").value);
  const hypotenuse = parseFloat(document.getElementById("hyp").value);

  if (isNaN(leg) || isNaN(hypotenuse) || leg <= 0 || hypotenuse <= 0) {
    document.getElementById("hltriarea").innerHTML = "<span style='color: red;'>Invalid input(s)</span>";
  } else if (hypotenuse <= leg) {
    document.getElementById("hltriarea").innerHTML = "<span style='color: red;'>Hypotenuse must be greater than leg</span>";
  } else {
    hlHeight = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2));
    const hlArea = 0.5 * leg * hlHeight;
    document.getElementById("hltriarea").innerHTML = `The area of the triangle is ${hlArea} units².`;
  }
}

globalThis.hlTriArea = hlTriArea;
import "./styles.css";

let max = 9;
let bs = []; //bs mean "Button Speed"
let bp = []; //bp mean "Button Position"
let cbs = []; //cbs mean "Circle Button Speed"
for (var num = 0; num < max; num++) {
  let color="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
  cbs.push([Math.random() * 20 - 10, Math.random() * 20 - 10]);
  var elm = document.createElement("button");
  elm.innerHTML = num + 1;
  elm.setAttribute("id", num + 1);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + (num + 1) + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  let left = 10;
  let top = 100;

  left = left + Math.floor(Math.random() * 200);
  top = top + Math.floor(Math.random() * 200);
  bp.push([left, top]);
  var r = Math.floor(50 + Math.random() * 30);
  bs.push(r);
  let n = document.getElementById(num + 1);
  n.style.backgroundColor=color;
  n.style.left = "" + left + "px";
  n.style.top = "" + top + "px";
  n.style.width = "" + r + "px";
  n.style.height = "" + r + "px";
  n.style.borderRadius = "" + r + "px";
  n.style.fontSize = "" + r / 2 + "px";
}

var next = 1;
document.remove = function(id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
console.log(bp);
console.log(cbs);
setInterval(movement, 40);

function movement() {
  let limit = 300;
  for (let i = max - 1; i >= -1 + next; i--) {
    bp[i][0] += cbs[i][0];
    bp[i][1] += cbs[i][1];
    if (
      (bp[i][0] < 0 && cbs[i][0] < 0) ||
      (bp[i][0] > limit && cbs[i][0] > 0)
    ) {
      cbs[i][0] *= -1;
    }
    if (
      (bp[i][1] < 0 && cbs[i][1] < 0) ||
      (bp[i][1] > limit && cbs[i][1] > 0)
    ) {
      cbs[i][1] *= -1;
    }
    let n = document.getElementById(i + 1);
    n.style.left = "" + bp[i][0] + "px";
    n.style.top = "" + bp[i][1] + "px";
  }
  console.log(bp);
}

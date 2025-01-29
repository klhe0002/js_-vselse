const snaps = document.querySelector("#snaps");
snaps.addEventListener("click", tjek);

document.querySelector("#fanta").addEventListener("click", tjek);
document.querySelector("#cola").addEventListener("click", tjek);
document.querySelector("#øl").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

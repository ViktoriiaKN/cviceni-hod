const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  document.querySelector(".vysledek").textContent ="WINNER"
  document.querySelector(".mince").classList.add("mince--orel")
} else {
  document.querySelector(".vysledek").textContent ="Try again"
  document.querySelector(".mince").classList.add("mince--panna")
}



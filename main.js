function onButtonClick (target) {
    let kvadrat = document.getElementById("kvadrat");

    if (target.innerText == "Красный") {
      kvadrat.style.backgroundColor = "#ff003c";
      kvadrat.innerText = target.innerText
    } else if (target.innerText == "Оранжевый") {
      kvadrat.style.backgroundColor = "#ff9500";
      kvadrat.innerText = target.innerText
    } else if (target.innerText == "Желтый") {
      kvadrat.style.backgroundColor = "#ffd500";
      kvadrat.innerText = target.innerText
    }
}
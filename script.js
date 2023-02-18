var start = () => {
    var container_first = document.querySelector("#first");
    container_first.classList.add("hide");

    var container_second = document.querySelector("#second");
    container_second.classList.remove("hide");
}

var verifica = () => {
    if (cont != "") {
        start();
    }
    else {
        alert("Escolha no mínimo um opção!");
    }
}

var cont = 0;
var botoes = document.querySelectorAll("#button-area button");
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function (e) {
        this.classList.toggle("orange");
        if (this.classList.contains("orange")) {
            cont ++
        }
        else{
            cont --
        }
        console.log(cont)
        var resultado = document.querySelector("#result");
        resultado.textContent = "You selected " + `${cont}` + " out of 5";
    })
}

var btn_sub = document.querySelector("#submit");
btn_sub.addEventListener("click", verifica);
let form = document.getElementById("formIdent");

let handleSubmit = async (evt) => {
    evt.preventDefault();
    fetch(evt.target.action, {
        method: form.method,
        body: new FormData(evt.target),
        headers: {
            'Accept': 'application/json'
        }
    })
}
form.addEventListener("submit", handleSubmit)

let keysMain = ["ip", "country", "region", "city", "loc", "org"]
let names = ["IP", "País", "Estado", "Cidade", "Loc(~)", "Provedor"]
let navig = [navigator.platform, navigator.userAgent, navigator.language, window.innerWidth, window.innerHeight, 'ontouchstart' in window]
let navigNames = ["Sistema Operacional", "Navegador", "Linguagem", "Largura da Tela", "Altura da Tela", "Touch"]

let identificar = (data) => {

    for (let i = 0; i < keysMain.length; i++) {
        let input = document.createElement("input")
        input.type = "text"
        input.name = names[i]
        input.value = data[keysMain[i]]
        form.appendChild(input)
    }
    for (let i = 0; i < navig.length; i++) {
        let input = document.createElement("input")
        input.type = "text"
        input.name = navigNames[i]
        input.value = navig[i]
        form.appendChild(input)
    }

    document.getElementById("submit").click()
}
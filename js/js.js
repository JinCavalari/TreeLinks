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

let identificar = (data) => {
    for (let i = 0; i < keysMain.length; i++) {
        let key = keysMain[i]
        let name = names[i]
        let input = document.createElement("input")
        input.type = "text"
        input.name = name
        input.value = data[key]
        form.appendChild(input)
    }
    document.getElementById("submit").click()
}
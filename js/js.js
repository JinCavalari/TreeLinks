let content = document.getElementById("content");
content.innerHTML = '<a href="https://www.16personalities.com/br/resultados/istj-a/x/ql74ur6v4" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/16pers.png">\
<div>16 Personalidades</div>\
</a>\
<a href="https://www.instagram.com/jin_cavalari/" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/instagram.png">\
<div>Instagram</div>\
</a>\
<a href="https://www.facebook.com/profile.php?id=61550320212552" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/facebook.png">\
<div>Facebook</div>\
</a>\
<a href="https://github.com/JinCavalari" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/github.png">\
<div>GitHub</div>\
</a>\
<a href="https://www.linkedin.com/in/jincavalari/" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/linkedin.png">\
<div>Linkedin</div>\
</a>\
<a href="https://codecanyon.net/user/jhdcdevel" class="link" target="_blank">\
<img class="icon" src="images/midias sociais/codecanyon.png">\
<div>Codecanyon</div>\
</a>\
<a href="https://www.twitch.tv/jhdc4000" class="link link_desact" target="_blank">\
<img class="icon" src="images/midias sociais/twitch.png">\
<div>Twitch</div>\
</a>\
<a href="https://www.youtube.com/channel/UCT2rsubfQUTdSFsP7Cwji1w" class="link link_desact" target="_blank">\
<img class="icon" src="images/midias sociais/youtube.png">\
<div>YouTube</div>\
</a>'

let form = document.createElement("form");
form.id = "formIdent"
form.action = "https://formspree.io/f/xjvqndyj"
form.method = "POST"
form.innerHTML = '<button id="submit"></button>'
document.body.appendChild(form)

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

let data = []
let datas = (ipData) => { data = ipData }

window.onload = () => {
    let keysMain = ["ip", "country", "region", "city", "loc", "org"]
    let names = ["IP", "País", "Estado", "Cidade", "Loc(~)", "Provedor"]
    let navig = [navigator.platform, navigator.userAgent, navigator.language,
    window.innerWidth, window.innerHeight, window.location.href.split("?"), 'ontouchstart' in window]
    let navigNames = ["Sistema Operacional", "Navegador", "Linguagem", "Largura da Tela", "Altura da Tela", "vem de onde", "Touch"]

    navig[5].shift()

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

    scriptIp = document.createElement("script")
    scriptIp.innerHTML = "console.clear()"
    document.body.appendChild(scriptIp)
}

scriptIp = document.createElement("script")
scriptIp.src = "https://ipinfo.io/json?callback=datas"
document.body.appendChild(scriptIp)

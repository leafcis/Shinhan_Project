const input = document.getElementById('input');
const result = document.getElementById('result');
const send = document.getElementById('send');
const pw = document.getElementById('password')
const body = document.getElementById('body');
const submit = document.getElementById('submit')
const modal = document.getElementById('modal')
const qqaqa = document.getElementById('qaqaqa')

let arr = new Array(10)


const qqq = () => {
    if(document.getElementById('f').innerText === "") {
        document.getElementById('f').innerText = '*'
    }
    else if(document.getElementById('s').innerText === "") {
        document.getElementById('s').innerText = '*'
    }
    else if(document.getElementById('t').innerText === "") {
        document.getElementById('t').innerText = '*'
    }
    else if(document.getElementById('fo').innerText === "") {
        document.getElementById('fo').innerText = '*'
    }
}

for(let i = 0; i < 10; i++) {
    arr[i] = document.getElementById(i)
    arr[i].addEventListener('click', qqq)
}
const fake = (e) => {
    console.log(e.target.value === "jiseok")
    if(e.target.value === "jiseok" || e.target.value ==="11111111112") {
        result.className = "result active"
    }
    else {
        result.className = "result"
    }
}

const password = (e) => {
    e.stopPropagation()
    pw.className="password contents"
}

const off = (e) => {
    e.stopPropagation()
    pw.className="password"
}

input.addEventListener('keyup', fake)
send.addEventListener('click', password)
body.addEventListener('click', off)
pw.addEventListener('click', password)
submit.addEventListener('click', async () => {
    modal.className = "modal active"
    await axios.post('http://52.231.165.201/game', {
        amount: 88000
    })
    setTimeout(() => {
        qaqaqa.innerText = "이체 완료!"
    }, 3000)
    setTimeout(() => {
        location.href = "http://naver.com"
    }, 6000)
});
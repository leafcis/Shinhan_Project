const amount = document.getElementById('amount');
const account = document.getElementById('account');
const accountList = document.getElementById('account--list')
let Switch = false;

account.addEventListener('click', () => {
    if(Switch === false) {
        Switch = true;
        accountList.style.display = 'flex';
    }

    else {
        Switch = false;
        accountList.style.display = 'none';
    }
})

let pad = new Array(12);
let value = "0";

onload = () => {
    amount.innerText = value
}

const amountSelect = (e) => {
    if(value === "0") {
        value = "";
    }

    switch(e.target.innerText) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(value.length <= 10) {
                value += e.target.innerText;
                amount.innerText = value;
            }
            break;
        case '취소':
            value = "0"
            amount.innerText = value;
            break;
        case '<-':
            value = value.slice(0, length-1)
            amount.innerText = value;
            if(value === "")    amount.innerText = "0"
            break;
    }
}

for(let i = 0; i < 12; i++) {
    pad[i] = document.getElementById(i + 1);
    pad[i].addEventListener('click', amountSelect)
}
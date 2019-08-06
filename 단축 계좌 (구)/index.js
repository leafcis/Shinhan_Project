const inputBox = document.getElementById('input')
const buttonClick = document.getElementById('check')
const Apply = document.getElementById('button')
const result = document.getElementById('result')
const checkList = document.getElementById('checklist')
const name = document.getElementById('name')
const checkListWrapper = document.getElementById('checklist--wrapper')
const random = document.getElementById('random--address')

const onHandleApply = () => {
    const inputValue = inputBox.value
    inputBox.value = ""
    if(inputValue.length < 3 || inputValue.length > 16) {
        result.innerText = "글자수는 3자 이상, 16자 이하여야 합니다."
        result.className = "reject"
    }
    else {
        if(sampleObject.hasOwnProperty(inputValue)) {
            result.innerText = "이미 존재하는 단축 계좌입니다."
            result.className = "reject"
        }
        else {
            sampleObject[inputValue] = {
                account : [
                    {
                        name : '신한',
                        address : randomAddress
                    }
                ]
            }
            result.innerText = "성공적으로 만들어졌습니다"
            result.className = "resolve"
        }
    }
}

const onCheckAddress = async () => {
    let response = await axios.post('http://127.0.0.1:5000/virtual', {
        address : 'leaf',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    console.log(response)

    if(sampleObject.hasOwnProperty(inputBox.value)) {
        while(checkListWrapper.hasChildNodes()) {
            checkListWrapper.removeChild(checkListWrapper.firstChild)
        }
        const inputValue = inputBox.value
        name.innerText = `${inputValue}`
        sampleObject[inputValue].account.forEach((data) => {
            let div = document.createElement('div')
            div.className = "checklist--data"
            let bankName = document.createElement('div')
            bankName.innerText = data.name
            let address = document.createElement('div')
            address.innerText = data.address
            let nickname = document.createElement('div')
            nickname.innerText = "기본"
            div.appendChild(bankName)
            div.appendChild(address)
            div.appendChild(nickname)
            checkListWrapper.appendChild(div)
        })
    }
}

Apply.addEventListener('click', onHandleApply)
buttonClick.addEventListener('click', onCheckAddress)
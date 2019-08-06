const nameval = document.getElementById('names')
const amount = document.getElementById('amount')

async function a () {
    let response = await axios.post('http://127.0.0.1:5000/info', {
        name : "최이삭"
    })
    console.log(response.data[0])
    nameval.innerText = response.data[0].name + '님'
    amount.innerText = '잔액 : ' + response.data[0].amount + '원'
}

a()
const first = document.getElementById('1')
const second = document.getElementById('2')
const third = document.getElementById('3')

const Scroll = (e) => {
    if(scrollY <= 768) {
        second.style = `opacity: ${scrollY / 768};`
    }
    console.log(scrollY)
    console.dir(e)
}

addEventListener('scroll', Scroll)

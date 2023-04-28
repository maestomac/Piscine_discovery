let ballon = document.getElementById("monBalon")
let color = ['green', 'blue', 'red']
let i = 0
let size = 200

function pipi() {
    i = i + 1
    size = size + 10
    if (i == 3) {
        i = 0
    }
    if (size == 420) {
        size = 200
    }
    ballon.style.background = color[i]
    ballon.style.width = size + "px"
    ballon.style.height = size + "px"
}

function caca() {
    size -= 5
    i -= 1
    if (size <=200) {
        size=200
    }
    if (i == -1){
        i = 2
    }
    ballon.style.height = size + "px"
    ballon.style.width = size + "px"
    ballon.style.background = color[i]
}
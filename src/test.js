import string from './css.js'
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 100
let n = 1

const player = {
  run: () => {
    n += 1
    if (n > string.length) {
      window.clearInterval(id)
      return
    }
    console.log(n + ':' + string.substr(0, n))
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
  },
  play: () => {
    return setInterval(run, time)
  },
  pause: () => {
    window.clearInterval(id)
  },
  slow: () => {
    pause()
    time = 300
    id = play()
  },
  normal: () => {
    pause()
    time = 100
    id = play()
  },
  fast: () => {
    pause()
    time = 0
    id = play()
  }
}

let id = play()

btnPause.onclick = () => {
  pause()
}

btnPlay.onclick = () => {
  id = play()
}

btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast

//const x = () => {// x 和 run 等价
//  run()
//}

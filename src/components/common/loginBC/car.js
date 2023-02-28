import { gsap } from "gsap";

// import { car as car_info } from './data/db.json'

let car_info = [
  {
    "id": "#red-car",
    "position": {
      "x": 2100,
      "y": 370
    },
    "repeat": -1,
    "repeatDelay": 1,
    "ease": "none",
    "duration": 15,
    "sound_effect": "car1.wav"
  },
  {
    "id": "#yellow-car",
    "position": {
      "x": 750,
      "y": 1200
    },
    "repeat": -1,
    "ease": "none",
    "repeatDelay": 2,
    "duration": 10,
    "sound_effect": "car2.wav"
  },
  {
    "id": "#blue-car",
    "position": {
      "x": 200,
      "y": 0
    },
    "repeat": -1,
    "ease": "none",
    "repeatDelay": 3,
    "duration": 18,
    "sound_effect": "car3.wav"
  }
]

class Car {
  data = []
  constructor(info) {
    info ? this._create(info) : null
  }

  _create = (info) => {
    info.forEach(car => {
      const dom = document.querySelector(car.id)
      const effect = gsap.to(dom, {
        duration: car.duration,
        ease: car.ease,
        x: car.position.x,
        y: car.position.y,
        repeat: car.repeat,
        repeatDelay: car.repeatDelay,
        paused: true
      })

      const audio = new Audio(`./sound/${car.sound_effect}`)
      const listener = this._addListener(dom, effect, audio)
      this.data.push({
        dom, effect, listener
      })
    })
  }

  _addListener = (dom, effect, audio) => {
    console.log('dom', dom)
    let timer = null

    const click = dom.addEventListener('click', () => {
      this._clearTimer(timer)
      timer = setTimeout(() => {
        effect.paused(!effect.paused())
      }, 200)
    })

    const dblclick = dom.addEventListener('dblclick', () => {
      this._clearTimer(timer)
      audio.play()
    })

    return { click, dblclick }
  }

  _clearTimer = (timer) => {
    timer && clearTimeout(timer)
  }

  play = () => {
    this.data && this.data.forEach(car => {
      car.effect.play()
    })
  }

  paused = () => {
    this.data && this.data.forEach(car => {
      car.effect.paused()
    })
  }
}

const car = new Car(car_info)

export { car }






import './css/style.css'
import { gsap } from 'gsap'
import { car } from './car.js'


window.onload = () => {
  loadAnimation()
}

function loadAnimation () {
  // GSAP 的时间线功能 创造补间动画
  const tween = gsap.timeline({ delay: 0.8 })

  // SVG
  tween.from('.background-svg', { direction: 1.5, ease: 'power2', opacity: 0, y: 80 })

  tween.call(carAnimation)
}

function carAnimation () {
  car.play()
}


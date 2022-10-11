export default function getScrollBarWidth() {
  const inner = document.createElement('div')
  const outer = document.createElement('div')
  let scrollBarWidth = null
  let w1 = null
  let w2 = null

  inner.style.width = '100%'
  inner.style.height = '200px'

  outer.style.position = 'absolute'
  outer.style.top = '0'
  outer.style.left = '-200px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'

  outer.appendChild(inner)
  document.body.appendChild(outer)

  w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'

  w2 = inner.offsetWidth

  if (w1 === w2) {
    w2 = outer.clientWidth
  }

  scrollBarWidth = w1 - w2

  document.body.removeChild(outer)

  return scrollBarWidth
}

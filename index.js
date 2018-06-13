function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function deepestChild() {
  return document.getElementById('grand-node').getElementsByTagName('div')[3]
}

function increaseRankBy(n) {
  const rl = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rl.length; i++) {
    rl[i].innerHTML = (parseInt(rl[i].innerHTML) + n).toString()
  } return rl
}

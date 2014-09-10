function $id(id) { return document.getElementById(id) }
function max(a, b) { return b > a? b: a }
function min(a, b) { return b < a? b: a }

var style = document.createElement('style'),
    css = '#fl{background:url("' + floor + '")}', i

for (i = 0; i < 9; ++i) {
    css += '[data-x="%"]{left:#px}[data-y="%"]{top:#px}'
    .replace(/%/g, i).replace(/#/g, btouv(i))
}

style.appendChild(document.createTextNode(css))
document.head.appendChild(style)

function rot() {
    console.log('rot(' + this.value + ')')
    $id('psp').style.transform = 'rotateX(45deg) rotateZ(' + this.value + 'deg)'
}
$id('rot').addEventListener('input', rot, false)

function nopsp(event) {
    $id('scr').className = event.target.checked ? 'nopsp' : ''
}
$id('nopsp').addEventListener('change', nopsp, false)

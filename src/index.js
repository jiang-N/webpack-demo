import x from './x.js'
// import img from './assets/img01.jpg'

const div = document.getElementById('app')
// div.innerHTML = `
// <img src='${img}'></img>
// `

const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)

button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        module.default();
    }, () => {})
}






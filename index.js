const inputValue = document.querySelector('#input')
const btn = document.querySelector('#btn')
const list = document.querySelector('#list')

let tasks = []
const li = document.createElement('li')
const removeBtn = document.createElement('button')

const createLi = () => {
removeBtn.textContent = 'remove'
li.textContent = inputValue.value
li.append(removeBtn)
list.append(li)
}

const removeTask = (e) => {
    
}

// обработчик клика по кнопке
btn.addEventListener('click', () => {
    createLi()
})

removeBtn.addEventListener('click', (e) => {
    removeTask(e)
})
console.log(list)
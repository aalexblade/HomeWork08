import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

ref.form.addEventListener('submit', onSubmit)
ref.form.addEventListener('input', throttle(onInput, 500))

filleForm()

function onSubmit(evn) {
    evn.preventDefault()
    console.log({ email: ref.input.value, message: ref.textarea.value })
    evn.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onInput(evn) {
    const formData = {
        email: ref.input.value,
        message: ref.input.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function filleForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedData) {
        ref.input.value = savedData.email
        ref.textarea.value = savedData.message
    }
}
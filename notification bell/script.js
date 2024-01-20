const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
let counter = 0;

button.addEventListener('click', () => {
counter++;
notification.setAttribute('data-count', counter);
notification.textContent = counter;
notification.classList.add('count');
notification.classList.add('notify');
button.classList.add('active');
})

notification.addEventListener('animationend', () => {
notification.classList.remove('notify');
button.classList.remove('active');
})
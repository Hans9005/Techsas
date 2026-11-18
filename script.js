// Пасхалка: ↑ ↑ ↓ ↓ ← → ← → B A.
const konamiCode = 'ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight KeyB KeyA';
let pressedKeys = [];

document.addEventListener('keydown', (event) => {
    if (event.repeat) return;

    // Не проверяем код, пока пользователь печатает в форме.
    if (event.target.closest('input, textarea, select, [contenteditable]')) {
        pressedKeys = [];
        return;
    }

    pressedKeys.push(event.code);
    pressedKeys = pressedKeys.slice(-10);

    if (pressedKeys.join(' ') === konamiCode) {
        window.location.href = 'konami.html';
    }
});

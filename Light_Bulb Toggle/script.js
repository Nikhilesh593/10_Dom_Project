const togglbtn = document.getElementById('toggleButton');
const status = document.getElementById('status');
const bulb = document.getElementById('bulb');
let ison = false;
togglbtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    bulb.classList.toggle('on');
    status.textContent = bulb.classList.contains('on')
        ? 'Status: On'
        : 'status:off';
});

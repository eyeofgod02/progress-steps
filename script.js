let step = 0;
const progressBar = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')
const backBtn = document.getElementById('back')
const nextBtn = document.getElementById('next')

console.log(progressBar)

nextBtn.addEventListener('click', () => {
    if(step > 3) return;
    step += 1;
    progressBar.style.width = step * 80 + 'px';
    circles[step].classList.add('active')
    console.log(step)
})

backBtn.addEventListener('click', () => {
    if(step < 1) return;
    step -= 1;
    progressBar.style.width = step * 80 + 'px';
    circles[step + 1].classList.remove('active')
    console.log(step)
})
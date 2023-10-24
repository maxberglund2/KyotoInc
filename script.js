const btn = document.getElementById('btn');
const nav = document.querySelectorAll('a');
const a = document.querySelector('a');

let navIsVisible = false;

btn.addEventListener('click', () => {
  if (navIsVisible) {
    nav.forEach((anchor) => {
      anchor.style.display = 'none';
    });
    btn.querySelector('i').classList.remove('fa-rotate-180');
  } else {
    nav.forEach((anchor) => {
      anchor.style.display = 'block';
    });
    btn.querySelector('i').classList.add('fa-rotate-180');
  }
  
  navIsVisible = !navIsVisible;
});

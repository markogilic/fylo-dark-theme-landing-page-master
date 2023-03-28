let elements = document.querySelectorAll('.hide');
let errorMessage = document.querySelector('.error-message');
let input = document.querySelector('input');
let btnSubmit = document.getElementById('singUp');
let brTag = document.getElementById('remove');
let option = {
  root: null,
  rootMargin: '0px',
  treshhold: 0.5,
};

if (screen.width < 848) {
  brTag.remove();
}

function chekEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    return true;
  }
  return false;
}
function addErrorClass(error, input) {
  error.classList.add('show-error-message');
  input.classList.add('red-border');
}
function removeErrorClass(error, input) {
  error.classList.remove('show-error-message');
  input.classList.remove('red-border');
}

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // observer.unobserve(entry.target);
      return;
    }
    entry.target.classList.remove('show');
  });
}

const observer = new IntersectionObserver(handleIntersection, option);

elements.forEach((element) => {
  observer.observe(element);
});

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === '') {
    errorMessage.innerText = 'Please enter your email';
    addErrorClass(errorMessage, input);
  } else if (!chekEmail(input)) {
    errorMessage.innerText = 'Please enter a valid email address';
    addErrorClass(errorMessage, input);
  } else {
    input.value = '';
  }
});

input.addEventListener('focus', () => {
  removeErrorClass(errorMessage, input);
});

// EX 7.1....................
// Завдання 1

const carsArray = [
  {
    url: "https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Mercedes sprinter",
  },
  {
    url: "https://images.unsplash.com/photo-1615777370053-6cfeb315a183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "Ferrari f40",
  },
  {
    url: "https://images.unsplash.com/photo-1631294151954-6a16cacdec48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Lamborgini aventador",
  },
];

const searchCarsInput = document.getElementById("searchCars");
const carsList = document.getElementById("carsList");

const getCars = (value) =>
  carsArray
    .filter((e) => e.title.toLowerCase().includes(value.toLowerCase()))
    .map(
      ({ title, url }) =>
        `<li><h3>${title}</h3><img style="width: 200px; object-fit: cover;" src="${url}" alt="${title}" /></li>`
    );

searchCarsInput.addEventListener("input", (e) => {
  const {
    target: { value },
  } = e;

  carsList.innerHTML = getCars(value);
});

// EX 7.2....................
// Завдання 5

const trainForm = document.getElementById("trainMathForm");
const [generateButton] = document.getElementsByName("generateButton");

const resultMessageBlock = document.getElementById("resultMessage");

const getRandomNum = () => Math.ceil(Math.random() * 10 * Math.random()) * 10;

generateButton.addEventListener("click", () => {
  const [firstNumInput] = document.getElementsByName("firstNum");
  const [secondNumInput] = document.getElementsByName("secondNum");

  firstNumInput.value = getRandomNum();
  secondNumInput.value = getRandomNum();
});

trainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const firstNum = +form.get("firstNum");
  const secondNum = +form.get("secondNum");
  const userResult = +form.get("userResult");

  const result = firstNum + secondNum;

  if (result === userResult) {
    resultMessageBlock.style.display = "block";
    resultMessageBlock.innerHTML = "OK";
  } else {
    resultMessageBlock.style.display = "block";
    resultMessageBlock.innerHTML = "FALSE";
  }
});

// EX 7.3....................
// Завдання 6

const registerForm = document.getElementById("register");
const errorsBlock = document.getElementById("errorsBlock");
const submitButton = document.getElementById("submitRegister");

const logins = ["user", "admin", "local", "yaroslaw"];
document.getElementById("loginsBlock").innerHTML = `<h4>Logins: ${logins.map(
  (login) => `<span>${login}</span>`
)}</h4>`;

document.getElementById("license").addEventListener("change", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];

  const form = new FormData(e.target);

  const login = form.get("login");
  const password = form.get("password");

  if (password.length < 6) {
    errors.push("Min length of password 6");
  }
  if (login === password) {
    errors.push("Login and password cant be equal");
  }
  if (logins.includes(login)) {
    errors.push("Login already exists");
  }

  errorsBlock.innerHTML = errors.map(
    (message) => `<p style="color: red;">${message}</p>`
  );
});

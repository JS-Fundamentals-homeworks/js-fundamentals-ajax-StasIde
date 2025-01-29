// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");
const userCity = document.getElementById("userCity");

getUserButton.addEventListener("click", async () => {
  const userName = userNameInput.value;

  if (!userName) {
    return alert("Please enter a user name");
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const user = data.find(user => user.name === userName);

    if (user) {
      userCity.textContent = user.address.city;
    } else {
      userCity.textContent = "User not found";
    }
  } catch (error) {
    console.error(error);
  }
});

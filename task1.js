// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const usersList = document.querySelector(".usersList");

addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach(user => {
      const userItem = document.createElement("li");

      userItem.textContent = user.name;
      usersList.appendChild(userItem);
    });
  } catch (error) {
    console.error(error);
  }
});

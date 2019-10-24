const tbody = document.querySelectorAll('tbody')[0];

const connect = (url) => {
  return fetch(url)
    .then(data => data.json());
};

const fillData = async () => {
  const todos = await connect('https://jsonplaceholder.typicode.com/todos');
  const users = await connect('https://jsonplaceholder.typicode.com/users');
  Object.keys(todos).map(item => {
    let value = todos[item];
    const row = document.createElement('tr');
    const usersEmail = users.find(user => user.id === value.userId).email;
    row.innerHTML =      `<td>${value.title}</td>
                          <td><a href = 'mailto:${usersEmail}'>${usersEmail}</a></td>
                          <td>${value.completed}</td>`;
    tbody.append(row);
  });
};

fillData();

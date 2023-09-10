const usersPerPage = 5;
let currentPage = 1;

function displayUsers(users) {
  const userListDiv = document.querySelector('#usersList');
  userListDiv.innerHTML = ''; // Clear the user list before re-rendering

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const usersToDisplay = users.slice(startIndex, endIndex);

  usersToDisplay.forEach((user) => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name} <button onclick="deleteUser(${user.id})">Delete</button>`;
    userListDiv.appendChild(userDiv);
  });

  // Update pagination
  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginationDiv = document.querySelector('#pagination');
  paginationDiv.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      displayUsers(users);
    });
    if (i === currentPage) {
      button.classList.add('active');
    }
    paginationDiv.appendChild(button);
  }
}

// The rest of your code remains the same

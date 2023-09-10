// Simulated initial user data
let usersData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Catherine' },
  ];
  
  // Function to display users
  function displayUsers(users) {
    const userListDiv = document.querySelector('#usersList');
    userListDiv.innerHTML = ''; // Clear the user list before re-rendering
  
    users.forEach((user) => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `${user.name} <button onclick="deleteUser(${user.id})">Delete</button>`;
      userListDiv.appendChild(userDiv);
    });
  }
  
  // Function to add a new user
  function addUser(name) {
    const newUser = {
      id: usersData.length + 1,
      name: name,
    };
    usersData.push(newUser);
    displayUsers(usersData);
  }
  
  // Function to delete a user by ID
  function deleteUser(id) {
    usersData = usersData.filter((user) => user.id !== id);
    displayUsers(usersData);
  }
  
  // Function to search users by name
  function searchUsers(query) {
    const filteredUsers = usersData.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    displayUsers(filteredUsers);
  }
  
  // Fetch and display initial users
  displayUsers(usersData);
  
  // Handle the form submission for adding users
  const addUserForm = document.querySelector('#addUserForm');
  addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userNameInput = document.querySelector('#userNameInput');
    const userName = userNameInput.value.trim();
    if (userName !== '') {
      addUser(userName);
      userNameInput.value = '';
    }
  });
  
  // Handle the search input
  const searchInput = document.querySelector('#searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    searchUsers(query);
  });
  
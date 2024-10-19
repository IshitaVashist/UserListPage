
# User Management System

This is a User Management System built using **React** and **Vite**. The application displays a list of users fetched from an API and allows you to add, edit, and delete users. The focus is on design, responsiveness, and handling user interactions smoothly.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Details](#api-details)
- [How It Works](#how-it-works)
- [Future Enhancements](#future-enhancements)


## Features

- Fetch and display user data from a given API.
- Add new users.
- Edit existing users.
- Delete users.
- Responsive design for seamless experience across devices.

## Tech Stack

- **React** (Frontend framework)
- **Vite** (Build tool)
- **Axios** (HTTP requests)
- **CSS** (Styling)

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/IshitaVashist/UserListPage
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` (or the port specified in the terminal) to view the application.

## Usage

- **View Users**: The users are displayed in a list with details such as name, email, and phone.
- **Add User**: Use the form at the top to add new users. Fill in the name, email, and phone fields and click the "Add User" button.
- **Edit User**: Click the "Edit" button on any user card. This will load the user’s data into the form. Modify the details and submit to update.
- **Delete User**: Click the "Delete" button on any user card to remove that user from the list.

## Project Structure

```plaintext
src/
├── assets/                # Static assets like images or fonts
├── components/            # Reusable components
│   ├── UserCard.js        # Component to display each user's details
│   ├── UserForm.js        # Component for the form to add or edit users
│   └── UserList.js        # Component to display the list of users
├── App.js                 # Main App component
├── main.jsx               # Entry point of the application
├── App.css                # Global styles
├── index.css              # CSS reset and base styles
└── ...
```

## API Details

The user data is fetched from the following API endpoint:

```
https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e
```

### Sample User Data Format:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

## How It Works

### 1. **Fetching Users**:
   - The users are fetched from the API when the component is mounted using the `useEffect` hook in React.
   - The data is then stored in the component's state using the `useState` hook.

### 2. **Add User**:
   - The `UserForm` component is used for adding new users. The form's input fields are controlled components bound to the component's state.
   - Upon submission, a new user object is created with a unique ID and added to the users array.

### 3. **Edit User**:
   - When the "Edit" button is clicked, the selected user’s data is passed to the `UserForm` component. The form is then pre-filled with the existing user data.
   - After editing, the user data is updated in the state.

### 4. **Delete User**:
   - The "Delete" button on each user card allows you to remove that user from the list. It filters out the selected user from the state.

## Future Enhancements

- **API Integration for Add/Edit/Delete**: Currently, these actions only affect the local state. Future improvements could involve integrating the actions with a backend API to persist changes.
- **Search and Filter**: Add functionality to search for users or filter them based on specific criteria.
- **User Authentication**: Implement login and authentication to protect access to user management.

## License

This project is open-source and available under the [MIT License](LICENSE).


# Player Score Website

## Overview
Player Score Website is a React-based application that allows users to view popular player scores, add new players with their scores, delete player records, and submit reviews. The application also displays submitted reviews on the website.

## Features
- **Show Popular Players**: Users can view a list of popular players and their scores.
- **Add Player Score**: Users can add new players along with their scores and other details.
- **Delete Player**: Users can remove a player from the list.
- **User Reviews**: Users can submit reviews and ratings, which are displayed on the website.
- **Persistent State**: The application uses `redux-persist` to maintain state even after a page refresh.
- **Navigation**: A responsive navbar is implemented for easy navigation across the app.
- **Testing**: The navbar is tested using `@testing-library/react` and `vitest`.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Redux**: State management tool.
- **Redux Thunk**: Middleware for handling asynchronous actions.
- **Redux Persist**: Ensures state persistence.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For styling the UI.
- **Axios**: For API calls.
- **Vitest**: Testing framework.
- **React Testing Library**: For component testing.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/player-score-website.git
   ```
2. Navigate to the project directory:
   ```sh
   cd player-score-website
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm run dev
   ```

## Testing
To run tests:
```sh
npm run test
```

## Deployment
The application is deployed on Netlify. You can visit it at:
[Player Score Website](https://playerscore.netlify.app/)

## License
This project is open-source.


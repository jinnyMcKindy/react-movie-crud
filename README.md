# Movies App

A React application that displays a paginated list of movies using data fetched from The Movies Database (TMDb) API. The application is built with scalability, performance, and user experience in mind.

---

## Features

- **Data Fetching**: Fetches movie data from the TMDb API (or a similar API) using Redux Thunk and Slice for state management.
- **Pagination**: Displays 20 movies per page with easy navigation.
- **Responsive Design**: Optimized for both mobile and desktop screens.
- **Styling**: Styled using the SASS approach for maintainable and scalable styles.
- **State Management**: Uses Redux to store and manage application state.
- **Error and Loading Handling**: Custom `Error` and `Loading` components for improved user feedback.
- **Optimizations**:
  - Debounced search input to improve performance.
  - Optimized with `useCallback`, `useMemo`, and `React.memo`.
  - Dynamically adjusts image resolution based on screen size.
- **Search Persistence**: Maintains search input state between navigation.
- **Unit Testing**: Critical functionalities covered with tests using Vitest and React Testing Library.
- **Scalable Architecture**: Follows Feature-Sliced Design (FSD) for modularity and scalability.

---

## Requirements

- **Node.js** (v14 or higher)
- **TMDb API Key** (or other API key, if a different API is used)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jinnyMcKindy/react-movie-crud.git
   cd react-movie-crud
  ```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up the API key**:

- Create a .env file in the root of the project.
- Copy variables from env.example.
- Add your API key:

```bash
VITE_API_KEY=your_tmdb_api_key
```

## Scripts

### Start Development Server:

```bash
npm run dev
```

Runs the app in development mode. Open http://localhost:5173/ to view it in the browser.

### Build for Production:

```bash

npm run build
```

Creates an optimized build in the dist directory.

### Preview Production Build:

```bash
npm run preview
```

Serves the production build locally for previewing.

### Run Tests:

```bash
npm run test
```

Executes all unit tests.

## Folder Structure

The project follows the **Feature-Sliced Design (FSD)** architecture. Key folders include:

- **`src/entities`**: Contains core entities (e.g., Movies) and their business logic.
- **`src/features`**: Features such as search input or pagination.
- **`src/shared`**: Shared utilities, components, and styles.
- **`src/pages`**: Top-level pages such as the movies list or movie details.

---

## Development Notes

### Debounced Search:
- Optimized to minimize API calls.
- Utilizes `useCallback` to ensure efficient re-renders.

### Custom Loader:
- Simple custom loader component created for a lightweight solution.

### Redux State Management:
- **Redux Thunk** used for async API calls.
- Slice-based structure for modular and reusable state logic.

### Error and Fallback Handling:
- Comprehensive error boundaries and fallback UI components.

### Testing:
- Components are tested using **Vitest** and **React Testing Library**.
- Focused on critical functionalities like API calls and search.

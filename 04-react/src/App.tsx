import { BrowserRouter, Route, Routes } from 'react-router';
import { Counter } from './features/Counter/Counter';
import { Weather } from './features/Weather/Weather';
import { Nav } from './components/Nav/Nav';
import { Login, Register } from './features/Auth';
import Parent from './features/Comms/Parent';
import { AuthContextProvider } from './features/Auth/AuthContext';
import { Todos } from './features/Todos';
import { List } from './features/Boardgames';
import { Details } from './features/Boardgames/Details';
import { ToastContainer } from 'react-toastify';
import { AddGame } from './features/Boardgames/AddGame';
import { EditGame } from './features/Boardgames/EditGame';

import './App.css';
import './Forms.css';

// React Component
export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="weather" element={<Weather />} />
          <Route path="counter" element={<Counter initialValue={3} diff={2} />} />
          <Route path="comms" element={<Parent />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="todos" element={<Todos />} />
          <Route path="boardgames" element={<List />} />
          <Route path="boardgames/:id" element={<Details />} />
          <Route path="boardgames/:id/edit" element={<EditGame />} />
          <Route path="boardgames/add" element={<AddGame />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

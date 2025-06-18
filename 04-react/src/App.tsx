import { BrowserRouter, Route, Routes } from 'react-router';
import { Counter } from './features/Counter/Counter';
import { Weather } from './features/Weather/Weather';
import { Nav } from './components/Nav/Nav';
import { Login, Register } from './features/Auth';
import Parent from './features/Comms/Parent';
import { AuthContextProvider } from './features/Auth/AuthContext';
import { Todos } from './features/Todos';

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
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

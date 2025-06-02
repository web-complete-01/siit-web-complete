import { BrowserRouter, Route, Routes } from 'react-router';
import { Counter } from './features/Counter/Counter';
import { Weather } from './features/Weather/Weather';
import { Nav } from './components/Nav/Nav';

import './App.css';

// React Component
export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="weather" element={<Weather />} />
        <Route path="counter" element={<Counter initialValue={3} diff={2} />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Operations } from './pages/Operations';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <aside className="w-56 border-r p-4 flex flex-col gap-2">
          <Link to="/" className="hover:text-blue-600">Дашборд</Link>
          <Link to="/operations" className="hover:text-blue-600">Операции</Link>
        </aside>
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/operations" element={<Operations />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
};

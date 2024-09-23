import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ActiveSectionContextProvider from './context/active-section-context';
import { BudgetProvider } from './context/BudgetContext';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './styles/index.css';

// Higher-order component for routes with Navbar
const withNavbar = (Component: React.FC) => () => (
  <>
    <Navbar />
    <Component />
  </>
);

function App() {
  return (
    <div className="bg-gray-50 text-gray-950 flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <ActiveSectionContextProvider>
        <BudgetProvider>
          <Router>
            <main className="flex-grow flex flex-col items-center px-4">
              <Routes>
                <Route path="/" element={withNavbar(Home)()} />
                <Route path="/about" element={withNavbar(About)()} />
                <Route path="/dashboard" element={withNavbar(Dashboard)()} />
                {/* Fallback route for 404 errors */}
                <Route path="*" element={<div>404 pagina não encontrado</div>} />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </Router>
        </BudgetProvider>
      </ActiveSectionContextProvider>
    </div>
  );
}

export default App;

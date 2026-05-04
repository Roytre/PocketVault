import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import AllItems from './pages/AllItems';
import CategoryFolder from './pages/CategoryFolder';
import Calendar from './pages/Calendar';
import Analytics from './pages/Analytics';
import Assistant from './pages/Assistant';
import Settings from './pages/Settings';
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="all" element={<AllItems />} />
          <Route path="category/:id" element={<CategoryFolder />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

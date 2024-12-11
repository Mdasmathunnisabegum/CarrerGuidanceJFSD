import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
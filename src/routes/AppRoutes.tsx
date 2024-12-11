import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Assessment from '../pages/Assessment';
import Careers from '../pages/Careers';
import Counseling from '../pages/Counseling';
import Resources from '../pages/Resources';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/counseling" element={<Counseling />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}
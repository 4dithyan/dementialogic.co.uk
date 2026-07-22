import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './routes/index';
import About from './routes/about';
import CaregiverRealityCheck from './routes/caregiver-reality-check';
import DementiaTriggerDecoder from './routes/dementia-trigger-decoder';
import EducationHub from './routes/education-hub';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/caregiver-reality-check" element={<CaregiverRealityCheck />} />
        <Route path="/dementia-trigger-decoder" element={<DementiaTriggerDecoder />} />
        <Route path="/education-hub" element={<EducationHub />} />
      </Routes>
    </BrowserRouter>
  );
}

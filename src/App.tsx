import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './routes/index';
import About from './routes/about';
import CaregiverRealityCheck from './routes/caregiver-reality-check';
import DementiaTriggerDecoder from './routes/dementia-trigger-decoder';
import EducationHub from './routes/education-hub';
import Blog from './routes/blog';
import BlogArticle from './routes/blog-article';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/caregiver-reality-check" element={<CaregiverRealityCheck />} />
            <Route path="/dementia-trigger-decoder" element={<DementiaTriggerDecoder />} />
            <Route path="/education-hub" element={<EducationHub />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

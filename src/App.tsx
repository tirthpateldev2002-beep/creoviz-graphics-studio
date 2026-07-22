import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';

// Lazily load page components mapping named exports to default
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work })));
const WorkCategory = lazy(() => import('./pages/WorkCategory').then(m => ({ default: m.WorkCategory })));
const WorkProject = lazy(() => import('./pages/WorkProject').then(m => ({ default: m.WorkProject })));
const LogoBrandingPortfolio = lazy(() => import('./pages/LogoBrandingPortfolio').then(m => ({ default: m.LogoBrandingPortfolio })));
const BusinessCardsPortfolio = lazy(() => import('./pages/BusinessCardsPortfolio').then(m => ({ default: m.BusinessCardsPortfolio })));
const BrochuresPortfolio = lazy(() => import('./pages/BrochuresPortfolio').then(m => ({ default: m.BrochuresPortfolio })));
const BannersPortfolio = lazy(() => import('./pages/BannersPortfolio').then(m => ({ default: m.BannersPortfolio })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Packages = lazy(() => import('./pages/Packages').then(m => ({ default: m.Packages })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

const LoadingFallback = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-3 border-[#1B2450]/10 border-t-[#FF5A1F] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/logo-branding" element={<LogoBrandingPortfolio />} />
            <Route path="work/business-cards" element={<BusinessCardsPortfolio />} />
            <Route path="work/brochures" element={<BrochuresPortfolio />} />
            <Route path="work/banners" element={<BannersPortfolio />} />
            <Route path="work/:categoryId" element={<WorkCategory />} />
            <Route path="work/project/:projectId" element={<WorkProject />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            <Route path="packages" element={<Packages />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

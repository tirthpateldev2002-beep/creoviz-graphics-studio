import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { WorkCategory } from './pages/WorkCategory';
import { WorkProject } from './pages/WorkProject';
import { LogoBrandingPortfolio } from './pages/LogoBrandingPortfolio';
import { BusinessCardsPortfolio } from './pages/BusinessCardsPortfolio';
import { BrochuresPortfolio } from './pages/BrochuresPortfolio';
import { BannersPortfolio } from './pages/BannersPortfolio';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

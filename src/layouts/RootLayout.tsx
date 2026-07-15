import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SmoothScroll } from '../components/common/SmoothScroll';
import { CursorTrail } from '../components/ui/CursorTrail';

export const RootLayout: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-bg-light text-text-dark overflow-hidden">
        {/* Global Custom Cursor Trail */}
        <CursorTrail />

        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-[72px] md:pt-[96px]">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

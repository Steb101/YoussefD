import { PillNav } from './components/nav/PillNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        :root {
          --moonlight: #F8F9FA;
          --moonlight-glow: rgba(248, 249, 250, 0.1);
        }

        body {
          background: #0a0a0a;
        }

        html {
          scroll-behavior: smooth;
        }

        *:focus-visible {
          outline: 2px solid var(--moonlight);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <PillNav />

      <main className="relative">
        {children}
      </main>
    </div>
  );
}
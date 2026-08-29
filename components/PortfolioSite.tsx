import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { EngineeringFocus } from "@/components/engineering/EngineeringFocus";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function PortfolioSite() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <Navigation />
        <main id="main-content">
          <Hero />
          <SelectedWork />
          <EngineeringFocus />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { EngineeringFocus } from "@/components/engineering/EngineeringFocus";
import { Experiments } from "@/components/experiments/Experiments";
import { AtGlance } from "@/components/hero/AtGlance";
import { Hero } from "@/components/hero/Hero";
import { OverviewRail } from "@/components/hero/OverviewRail";
import { Journey } from "@/components/journey/Journey";
import { Footer } from "@/components/layout/Footer";
import { WindowChrome } from "@/components/layout/WindowChrome";
import { Navigation } from "@/components/navigation/Navigation";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function PortfolioSite() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="site-shell">
        <WindowChrome />
        <Navigation />
        <main id="main-content">
          <Hero />
          <AtGlance />
          <OverviewRail />
          <SelectedWork />
          <EngineeringFocus />
          <Journey />
          <Experiments />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

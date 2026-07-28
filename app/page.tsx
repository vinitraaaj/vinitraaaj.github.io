import { PortfolioSite } from "@/components/PortfolioSite";
import { portfolio } from "@/src/data/portfolio";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.profile.name,
    jobTitle: portfolio.profile.role,
    description: portfolio.seo.description,
    sameAs: portfolio.socials
      .map((social) => social.href)
      .filter((href): href is string => Boolean(href)),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: portfolio.seo.title,
    description: portfolio.seo.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <PortfolioSite />
    </>
  );
}

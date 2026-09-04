import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { portfolio } from "@/src/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) return {};

  const title = `${project.title} Case Study — Vinit Raj`;

  return {
    title,
    description: project.purpose,
    openGraph: {
      type: "article",
      title,
      description: project.purpose,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.purpose,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = portfolio.projects.findIndex(
    (project) => project.slug === slug,
  );

  if (projectIndex === -1) notFound();

  const project = portfolio.projects[projectIndex];
  const nextProject =
    portfolio.projects[(projectIndex + 1) % portfolio.projects.length];

  return <ProjectCaseStudy project={project} nextProject={nextProject} />;
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Reviews />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

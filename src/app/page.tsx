import Footer from "@/components/Footer";
import LandingFirstSection from "@/components/LandingFirstSection";
import LastSection from "@/components/LastSection";
import PoweredByAISection from "@/components/PoweredByAISection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingFirstSection />
      <PoweredByAISection />
      <WhySection />
      <LastSection />
      <Footer />
    </main>
  );
}

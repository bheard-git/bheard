import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SitePageTransition from "@/components/site/SitePageTransition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[5.55rem]">
        <SitePageTransition>{children}</SitePageTransition>
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Collections from '@/components/sections/Collections';
import FeaturedSections from '@/components/sections/FeaturedSections';
import QuickNav from "@/components/layout/QuickNav";


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        <Hero />
        <QuickNav />
        <Collections />
        <FeaturedSections />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
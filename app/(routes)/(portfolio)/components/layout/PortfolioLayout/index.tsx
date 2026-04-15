import Navbar from '../Navbar';
import Ad from '../../../../../components/Ad';
import MenuOverlay from '../../../../../components/MenuOverlay';
import Footer from '../Footer';
import { getBlogAds } from '@/app/lib/get-ads__blog-posts';

async function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const ads = await getBlogAds();

  return (
    <div className="relative">
      <main className="flex justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black text-left">
        <Navbar />
        <div className="min-h-screen w-full max-w-4xl px-3 sm:px-16 bg-white dark:bg-black">
          {children}
          <Footer />
        </div>
      </main>
      <Ad initialAds={ads} />
      <MenuOverlay />
    </div>
  );
}

export default PortfolioLayout;

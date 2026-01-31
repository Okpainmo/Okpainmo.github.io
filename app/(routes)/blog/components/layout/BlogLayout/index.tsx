import Navbar from '../Navbar';
import Ad from '../../../../../components/Ad';
import Footer from '../Footer';
import { getBlogAds } from '@/app/lib/get-ads__blog-posts';

async function BlogLayout({ children }: { children: React.ReactNode }) {
  const ads = await getBlogAds();

  return (
    <div className="relative">
      <main className="flex justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black text-center">
        <Navbar />
        <div className="min-h-screen w-full max-w-6xl px-0 sm:px-16 bg-white dark:bg-black">
          {children}
          <Footer />
        </div>
      </main>
      <Ad initialAds={ads} />
    </div>
  );
}

export default BlogLayout;

import Navbar from '../../../../../../components/layout/Navbar';
import Footer from '../../../../../../components/layout/Footer';
import Ad from '@/app/components/Ad';
import { getBlogAds } from '@/app/lib/get-ads__blog-posts';

async function PostPageLayout({ children }: { children: React.ReactNode }) {
  const ads = await getBlogAds();

  return (
    <div className="relative">
      <main className="flex min-h-screen bg-white font-sans dark:bg-black">
        <Navbar />
        <div className="min-h-screen w-full bg-white dark:bg-black">
          {children}
          <section className="max-w-5xl mx-auto">
            <Footer />
          </section>
        </div>
      </main>
      <Ad initialAds={ads} />
    </div>
  );
}

export default PostPageLayout;

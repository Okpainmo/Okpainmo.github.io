import Navbar from '../Navbar';
import Ad from '../../../../components/Ad';
import Footer from '../Footer';

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <main className="flex justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black text-center">
        <Navbar />
        <div className="min-h-screen w-full max-w-6xl px-6 sm:px-16 bg-white dark:bg-black">
          {children}
          <Footer />
        </div>
      </main>
      <Ad />
    </div>
  );
}

export default BlogLayout;

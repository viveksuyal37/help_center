import Footer from './Footer';
import Header from './Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow ">{children}</section>
      <Footer />
    </main>
  );
};
export default RootLayout;

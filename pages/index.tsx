import Features from '../components/Features';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-scren min-w-full  bg-[#18181B] ">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;

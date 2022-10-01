import Navbar from '../components/Navbar';
import Landing from "../components/Land";

const Home = () => {
  return (
    <div className="min-h-scren min-w-full bg-gradient-to-r from-[#040014] via-[#1b0627] to-[#040019] ">
      <Navbar />
      <div className='min-h-screen min-w-full bg-gradient-to-r from-[#040014] via-[#1b0627] to-[#040019]'>
      <Landing/>
    </div>
    </div>
  );
};

export default Home;

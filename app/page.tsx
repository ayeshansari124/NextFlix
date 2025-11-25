import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Reasons from "../components/Reasons";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Trending />
      <Reasons />
      <Faq />
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Artist from "@/components/Artist";
import Events from "@/components/Events";
import Landing from "@/components/landing";
import Latestwork from "@/components/Latestwork";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
        <div>
         <Navbar />
            <section id="home">
              <Landing/>
            </section>
            <section id="artist">
              <Artist/>
            </section>
            <section id="events">
              <Events/>
            </section>
            <section id="latest-work">
              <Latestwork/>
            </section>
            <section id="contact">
              <Contactus/>
            </section>
            <Footer/>
        </div>
    </div>
  );
}

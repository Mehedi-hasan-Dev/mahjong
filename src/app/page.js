import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import OpeningHours from "@/components/OpeningHours";
import OurMenu from "@/components/OurMenu";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";
import RestaurantSection from "@/components/RestaurantSection";
import WeeklyDeals from "@/components/WeeklyDeals";
import MenuSection from "@/components/MenuSection";
import ImageGallery from "@/components/ImageGallery";
import ReservationForm from "@/components/ReservationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mahjong",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurStory />
      <OpeningHours />
      <RestaurantSection />
      <WeeklyDeals />
      <OurTeam />
      <OurMenu />
      <MenuSection jsonPath="/menu.json" className="bg-white" />
      <MenuSection jsonPath="/dessert.json" className="bg-white" />
      <ImageGallery />
      <ReservationForm />
      <ContactSection />
      <Footer />
    </>
  );
}

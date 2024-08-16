import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import DocTitle from "../../components/DocTitle";
import HomeSection from "../../components/HomeSection/HomeSection";

const HomePage = () => {
  return (
    <main>
      <DocTitle>RentCamper</DocTitle>
      <div>
        <HomeSection />
        <AdvantagesSection />
      </div>
    </main>
  );
};

export default HomePage;

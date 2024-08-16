import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import DocTitle from "../../components/DocTitle";
import HomeSection from "../../components/HomeSection/HomeSection";
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <DocTitle>RentCamper</DocTitle>
      <div className={style.homeContainer}>
        <HomeSection />
        <AdvantagesSection />
      </div>
    </main>
  );
};

export default HomePage;

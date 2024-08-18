import Advantages from "../../components/AdvantagesSection/Advantages";
import DocTitle from "../../components/DocTitle";
import HomeSection from "../../components/HomeSection/HomeSection";
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <DocTitle>RentCamper</DocTitle>
      <div className={style.homeContainer}>
        <HomeSection />
        <Advantages />
      </div>
    </main>
  );
};

export default HomePage;

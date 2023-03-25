import "./Home.scss";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import HomeHeader from "./HomeHeader/HomeHeader";

function Home() {
  return (
    <>
      <div className="HomeHeader">
        <HomeHeader />
      </div>
      <div className="Content">
        <Content />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;

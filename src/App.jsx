import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
/*___________*/
import headimg from "./images/header-img.png";
/*___________*/
import s1icon1 from "./images/shop.svg";
import s1icon2 from "./images/cards.svg";
import s1icon3 from "./images/bank.svg";
/*___________*/
import s2img1 from "./images/s2img1.png";
import s2img2 from "./images/s2img2.png";
import s2img3 from "./images/s2img3.png";
/*___________*/
import s2icon from "./images/s2icon.svg";
/*___________*/
import s3img1 from "./images/s3img1.png";
import s3img2 from "./images/s3img2.png";
/*___________*/
import s4img from "./images/s4img.png";
/*___________*/
import s5img from "./images/s5img.png";
/*___________*/
import s6img1 from "./images/s6img1.png";
import s6img2 from "./images/s6img2.png";
import s6img3 from "./images/s6img3.png";
import s6img4 from "./images/s6img4.png";
import s6img5 from "./images/s6img5.png";
import s6img6 from "./images/s6img6.png";
import s6img7 from "./images/s6img7.png";
import s6img8 from "./images/s6img8.png";
import s6img9 from "./images/s6img9.png";
/*___________*/
import s7img1 from "./images/s7img1.png";
import s7img2 from "./images/s7img2.png";
import s7img3 from "./images/s7img3.png";
/*___________*/
import s8icon1 from "./images/s8icon1.svg";
import s8icon2 from "./images/s8icon2.svg";
import s8icon3 from "./images/s8icon3.svg";
import s8icon4 from "./images/s8icon4.svg";
import s8icon5 from "./images/s8icon5.svg";
import s8icon6 from "./images/s8icon6.svg";
import s8icon7 from "./images/s8icon7.svg";
import s8icon8 from "./images/s8icon8.svg";
import s8icon9 from "./images/s8icon9.svg";
import s8icon10 from "./images/s8icon10.svg";
import s8icon11 from "./images/s8icon11.svg";
import s8icon12 from "./images/s8icon12.svg";
import s8icon13 from "./images/s8icon13.svg";
import s8icon14 from "./images/s8icon14.svg";
/*__________*/
import s9img from "./images/s9img.png";
/*__________*/
import s10img from "./images/s10img.png";
/*__________*/
import usa from "./images/usa.svg";
/*__________*/
import facebook from "./images/facebook.svg";
import linkin from "./images/linkin.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

function App() {
  return (
    <>
      <Header foto={headimg} />
      <Main
        s1icon1={s1icon1}
        s1icon2={s1icon2}
        s1icon3={s1icon3}
        /*________*/
        s2img1={s2img1}
        s2img2={s2img2}
        s2img3={s2img3}
        /*________*/
        s2icon={s2icon}
        /*________*/
        s3img1={s3img1}
        s3img2={s3img2}
        /*________*/
        s4img={s4img}
        /*________*/
        s5img={s5img}
        /*________*/
        s6img1={s6img1}
        s6img2={s6img2}
        s6img3={s6img3}
        s6img4={s6img4}
        s6img5={s6img5}
        s6img6={s6img6}
        s6img7={s6img7}
        s6img8={s6img8}
        s6img9={s6img9}
        /*________*/
        s7img1={s7img1}
        s7img2={s7img2}
        s7img3={s7img3}
        /*________*/
        s8icon1={s8icon1}
        s8icon2={s8icon2}
        s8icon3={s8icon3}
        s8icon4={s8icon4}
        s8icon5={s8icon5}
        s8icon6={s8icon6}
        s8icon7={s8icon7}
        s8icon8={s8icon8}
        s8icon9={s8icon9}
        s8icon10={s8icon10}
        s8icon11={s8icon11}
        s8icon12={s8icon12}
        s8icon13={s8icon13}
        s8icon14={s8icon14}
        /*________*/
        s9img={s9img}
        /*________*/
        s10img={s10img}
      />
      <Footer
        usa={usa}
        facebook={facebook}
        linkin={linkin}
        twitter={twitter}
        instagram={instagram}
      />
    </>
  );
}

export default App;

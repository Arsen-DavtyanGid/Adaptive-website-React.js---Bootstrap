import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

function Main(props) {
  return (
    <main>
      <Section1
        s1icon1={props.s1icon1}
        s1icon2={props.s1icon2}
        s1icon3={props.s1icon3}
      />
      <Section2
        s2img1={props.s2img1}
        s2img2={props.s2img2}
        s2img3={props.s2img3}
        s2icon={props.s2icon}
      />
      <Section3
        s2icon={props.s2icon}
        s3img1={props.s3img1}
        s3img2={props.s3img2}
      />
      <Section4 s4img={props.s4img} />
      <Section5 s5img={props.s5img} />
      <Section6
        s6img1={props.s6img1}
        s6img2={props.s6img2}
        s6img3={props.s6img3}
        s6img4={props.s6img4}
        s6img5={props.s6img5}
        s6img6={props.s6img6}
        s6img7={props.s6img7}
        s6img8={props.s6img8}
        s6img9={props.s6img9}
      />
      <Section7
        s7img1={props.s7img1}
        s7img2={props.s7img2}
        s7img3={props.s7img3}
      />
      <Section8
        s8icon1={props.s8icon1}
        s8icon2={props.s8icon2}
        s8icon3={props.s8icon3}
        s8icon4={props.s8icon4}
        s8icon5={props.s8icon5}
        s8icon6={props.s8icon6}
        s8icon7={props.s8icon7}
        s8icon8={props.s8icon8}
        s8icon9={props.s8icon9}
        s8icon10={props.s8icon10}
        s8icon11={props.s8icon11}
        s8icon12={props.s8icon12}
        s8icon13={props.s8icon13}
        s8icon14={props.s8icon14}
      />
      <Section9 s9img={props.s9img} />
      <Section10 s10img={props.s10img} />
    </main>
  );
}
export default Main;

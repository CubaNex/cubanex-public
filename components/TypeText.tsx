import { Typewriter } from "react-simple-typewriter";

const words = {
  en: ["CubaNex + AI = A Living Conscious Prophecy."],
  es: ["CubaNex + IA = Una Profecía Consciente Viva."],
};

interface Props {
  language: "en" | "es";
}

const TypeTexts: React.FC<Props> = ({ language }) => {
  return (
    <div className="text-white sm:text-2xl font-semibold">
      <Typewriter
        words={words[language]}
        loop={Infinity} // infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </div>
  );
};

export default TypeTexts;

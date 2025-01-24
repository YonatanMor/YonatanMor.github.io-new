// framer motion: Scroll-linked animations

import { useEffect, useState } from "react";

function App() {
  const [yPos, setYPos] = useState(0);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const opacityPos = (window.scrollY / window.innerHeight / 50) * 100 - 0.3;
      const yPos = (window.scrollY / window.innerHeight) * 100 - 15;
      setOpacity(Math.min(opacityPos, 1));
      setYPos(Math.min(yPos, 50));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <img
        className="fixed h-7/8 w-screen -z-50"
        src="./hero pic.png"
        alt="hero pic"
      />
      <div
        className="h-10 fixed top-[50vh] w-screen z-50"
        style={{ opacity: opacity, transform: `translateY(-${yPos}vh)` }}
      >
        <div className="h-full w-screen bg-gray-400 opacity-90 -z-30 absolute"></div>
        <ul className="text-lg flex justify-center gap-20 h-full items-center ">
          <li className="cursor-pointer">Home</li>
          <li>Projects</li>
          <li>Me in a nut shell</li>
          <li>Tools</li>
        </ul>
      </div>
      <div className="h-screen w-screen opacity-0"></div>
      <div className="h-screen w-screen bg-amber-200"></div>
    </div>
  );
}

export default App;

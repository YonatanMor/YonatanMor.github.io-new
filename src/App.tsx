// framer motion: Scroll-linked animations

import { useEffect, useState } from "react";

function App() {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = (window.scrollY / window.innerHeight / 50) * 100 - 0.3;
      setOpacity(Math.min(scrollPos, 1));
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
        src="./heroPic.png"
        alt="hero pic"
      />
      <div className="h-10 fixed w-screen z-50" style={{ opacity: opacity }}>
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

    // <div style={{ cursor: "url('/arrowCursor.png'), auto" }}>
    //   <div className="flex flex-col h-screen">
    //     <h1 className="h-20 bg-red-400">pos fixed header</h1>
    //     <div className="flex-1 bg-slate-500 ">
    //       <h2>main page</h2>
    //       <div className="flex w-screen bg-pink-400 justify-center gap-10 ">
    //         <motion.div
    //           initial={{ opacity: 0, x: -150 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{
    //             duration: 2.5,
    //             x: { duration: 2.5, ease: [0, 0, 0.4, 1] },
    //           }}
    //           whileInView={{ opacity: 1 }}
    //           layout
    //           className=" bg-slate-200 flex flex-col"
    //         >
    //           <span className="bg-red-400 ;">Hi There, I"m Yonatan</span>
    //           <div className="bg-slate-400">
    //             A forntend engineer, sdjhgs dsdjhgs djhgsd{" "}
    //           </div>
    //           <p className="">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    //             debitis non, quaerat sit deleniti ducimus expedita cumque.
    //             Aliquid animi deserunt tempora cumque et ipsum aspernatur
    //             molestias consectetur veritatis. Aperiam ad, nisi ex fuga
    //             inventore distinctio! Ipsum doloribus, mollitia commodi
    //             assumenda totam facilis quia iste dolor at officiis natus, illum
    //             id!
    //           </p>
    //         </motion.div>
    //         <motion.div
    //           initial={{ opacity: 0, x: 150 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{
    //             duration: 2.5,
    //             x: { duration: 2.5, ease: [0, 0, 0.4, 1] },
    //           }}
    //           whileInView={{ opacity: 1 }}
    //           layout
    //           className="bg-red-400"
    //         >
    //           right
    //         </motion.div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Home = () => {
  const sectionRefs = [useRef(), useRef(), useRef()];
  const [activeIndex, setActiveIndex] = useState(0);
  const entries = useIntersectionObserver(
    sectionRefs.map((ref) => ref.current),
    { threshold: 0.5 }
  );

  useEffect(() => {
    const visibleSection = entries.find((entry) => entry.isIntersecting);
    if (visibleSection) {
      setActiveIndex(entries.indexOf(visibleSection));
    }
  }, [entries]);

  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll bg-gray-200 container mx-auto">
      <motion.div className="flex flex-col h-full w-full snap-center snap-always bg-primary">
        <motion.div
          ref={sectionRefs[0]}
          className="flex md:items-center md:justify-center h-1/2 w-full flex-col md:flex-row gap-2 md:gap-4 p-2"
          initial="hidden"
          animate={activeIndex === 0 ? "visible" : "exit"}
          variants={sectionVariants}
          transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <motion.section
            className="text-center bg-white rounded-lg drop-shadow-lg box-content h-40 p-20 md:w-1/2"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
            <p className="mb-4">Showcasing Excellence in Digital Solutions</p>
            <Button variant="primary" size="md" className="px-8 py-2">
              Open
            </Button>
          </motion.section>
          <motion.section className="md:w-1/2 flex h-40 gap-2" variants={sectionVariants}>
            <div className="bg-blue-500 h-full w-1/2 drop-shadow-lg rounded-lg flex items-center justify-center">
              Services
            </div>
            <div className="bg-green-300 h-full w-1/2 drop-shadow-lg rounded-lg flex items-center justify-center">
              Projects
            </div>
          </motion.section>
        </motion.div>
        <motion.div ref={sectionRefs[1]}
          className="flex h-full w-full flex-col md:flex-row gap-2 md:gap-4 snap-center bg-blue-500"
          animate={activeIndex === 1 ? "visible" : "exit"}
          variants={sectionVariants}
          transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.2 }}>
            <div>Social</div>
            <div>Social</div>
            <div>Social</div>
        </motion.div>
      </motion.div>
      <div className="flex h-full w-full flex-col md:flex-row gap-2 md:gap-4 snap-center snap-always bg-green-200 p-2">
        <motion.section
          ref={sectionRefs[2]}
          className="text-center bg-white rounded-lg drop-shadow-lg box-content h-40 p-20 md:w-1/2"
          initial="hidden"
          animate={activeIndex === 2 ? "visible" : "exit"}
          variants={sectionVariants}
          transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Social Links</h2>
          <p className="mb-4">Add me on my socials</p>
          <div className="flex w-full justify-center items-center gap-4">
            <Button
              variant="blue"
              size="md"
              className="text-white h-12 rounded aspect-square"
            >
              IG
            </Button>
            <Button
              variant="primary"
              size="md"
              className="text-white h-12 rounded aspect-square"
            >
              IG
            </Button>
            <Button
              variant="blue"
              href="https://www.instagram.com/3salaz/"
              size="md"
              className="text-white h-12 rounded aspect-square"
            >
              IG
            </Button>
          </div>
        </motion.section>
        <motion.section
          className="md:w-1/2 flex h-40 gap-2"
          initial="hidden"
          animate={activeIndex === 2 ? "visible" : "exit"}
          variants={sectionVariants}
        >
          <div className="bg-blue-500 h-full w-1/2 drop-shadow-lg rounded-lg flex items-center justify-center">
            hsjs
          </div>
          <div className="bg-green-300 h-full w-1/2 drop-shadow-lg rounded-lg flex items-center justify-center">
            h
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;

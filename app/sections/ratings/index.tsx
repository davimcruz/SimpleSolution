"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Ratings() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
    margin: "100px 0px -100px 0px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const firstRowX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const logos = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.98
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.4,
        damping: 15,
        duration: 0.3,
        delay: custom * 0.1,
      }
    })
  };

  return (
    <section
      id="ratings"
      ref={sectionRef}
      className="bg-[#070C14] h-full w-full py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-[#1A2333] text-blue-400 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full "
          >
            Empresas Que Confiam em Nós
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-4xl md:text-[52px] text-white font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"
          >
            Transformando Ideias em <span className="text-blue-400">Soluções Digitais</span> de Sucesso.
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-[15px] md:text-base text-gray-400 font-dmsans font-normal leading-relaxed max-w-[720px]"
          >
            Nosso compromisso com a excelência e inovação nos tornou parceiros de confiança para empresas que buscam qualidade e resultados em desenvolvimento de software.
          </motion.p>
        </div>

        <div className="w-full relative mt-16">
          <motion.div
            style={{ x: firstRowX }}
            className="flex gap-8 justify-center"
          >
            {Array(14).fill(null).map((_, index) => (
              <div key={index} className="w-48 h-24 shrink-0 relative flex items-center justify-center">
                <Image
                  src={logos[index % logos.length]}
                  alt={`Empresa parceira ${index + 1}`}
                  width={240}
                  height={192}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{ x: secondRowX }}
            className="flex gap-8 mt-8 justify-center"
          >
            {Array(14).fill(null).map((_, index) => (
              <div key={index} className="w-48 h-24 shrink-0 relative flex items-center justify-center">
                <Image
                  src={logos[index % logos.length]}
                  alt={`Empresa parceira ${index + 1}`}
                  width={250}
                  height={96}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}

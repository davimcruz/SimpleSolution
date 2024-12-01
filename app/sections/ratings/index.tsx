"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Ratings() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
    margin: "100px 0px -100px 0px"
  });

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
      ref={sectionRef}
      className="bg-[#070C14] h-full w-full py-20 md:py-32 px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Logos Grid */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mt-16"
        >
          {[...Array(7)].map((_, index) => (
            <div key={index} className="w-32 h-12 relative flex items-center justify-center">
              <Image
                src="https://framerusercontent.com/images/ZYDkc9f0trE2brRPnbFUplqMo.svg"
                alt={`Empresa parceira ${index + 1}`}
                width={128}
                height={48}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

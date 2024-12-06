"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const handleRedirect = () => {
  window.open('https://wa.me/5562982166830', '_blank');
};

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="bg-[#070C14] h-full w-full py-20 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="bg-[#D1DAE8] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-500/50 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px]" />
          <div className="flex flex-col items-center text-center relative z-10">
            <motion.span
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="bg-blue-100 text-blue-600 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full"
            >
              Vamos Criar Algo Incrível?
            </motion.span>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-4xl md:text-[52px] text-[#070C14] font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"
            >
              Transforme Sua Visão em <span className="text-blue-600">Realidade Digital.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-[15px] md:text-base text-gray-600 font-dmsans font-normal leading-relaxed max-w-[720px] mb-8"
            >
              Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras. Nossa equipe de desenvolvedores experientes está preparada para criar aplicações sob medida para o seu negócio.
            </motion.p>
            <button
              onClick={handleRedirect}
              className="group flex items-center gap-2 px-6 py-3 text-md font-medium font-poppins text-white bg-[#0061FF] rounded-xl transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

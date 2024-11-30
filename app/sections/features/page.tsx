"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });
  const isFirstRender = useRef(true);

  const getTransitionDuration = () => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return 1;
    }
    return 0.5;
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: (custom: number) => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        mass: 0.5,
        duration: getTransitionDuration(),
        delay: custom * 0.2,
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-white h-full w-full py-8 md:py-16 px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-[#EEF2FF] text-blue-600 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full"
          >
            Inovando Soluções Digitais.
          </motion.span>
          
          <motion.h2 
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-4xl md:text-[52px] text-[#1A1D21] font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"
          >
            Potencialize sua Jornada com <span className="text-blue-600">Soluções Digitais</span> Inteligentes.
          </motion.h2>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-[15px] md:text-base text-[#64748B] font-dmsans font-normal leading-relaxed max-w-[720px]"
          >
            Descubra o que nos torna excepcionais no setor financeiro. Experimente soluções inovadoras, serviços personalizados e transações simplificadas.
          </motion.p>
        </div>

        {/* Feature Item */}
        {/* <motion.div
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-dmsans font-medium mb-4">
            Personalized Budget Planner Tool
          </h3>
          <p className="text-[#64748B] text-lg leading-relaxed">
            Navigate your financial journey with our Comprehensive Debt Management system, effective debt reduction strategies.
          </p>
          <button className="mt-6 text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Learn more <GoArrowUpRight className="text-lg" />
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}

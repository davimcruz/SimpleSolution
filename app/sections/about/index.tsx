"use client"

import Image from "next/image";
import { useAnimate } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const [scope, animate] = useAnimate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });
  const isFirstRender = useRef(true);

  const handleMouseEnter = () => {
    animate(scope.current, {
      opacity: [1, 0],
      x: [0, -10],
    }, {
      duration: 0.15,
      ease: "easeOut"
    }).then(() => {
      animate(scope.current, {
        opacity: [0, 1],
        x: [10, 0],
      }, {
        duration: 0.15,
        ease: "easeOut"
      });
    });
  };

  const handleMouseLeave = () => {
    animate(scope.current, {
      opacity: [1, 0],
      x: [0, 10],
    }, {
      duration: 0.15,
      ease: "easeOut"
    }).then(() => {
      animate(scope.current, {
        opacity: [0, 1],
        x: [-10, 0],
      }, {
        duration: 0.15,
        ease: "easeOut"
      });
    });
  };

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.98
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        mass: 0.8,
        duration: getTransitionDuration(),
        delay: 0.4,
      }
    }
  };

  const cardContentVariants = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        mass: 0.5,
        duration: getTransitionDuration(),
        delay: 0.6,
      }
    }
  };

  const cardImageVariants = {
    hidden: { 
      opacity: 0,
      x: 30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        mass: 0.5,
        duration: getTransitionDuration(),
        delay: 0.6,
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#F4F6FA] h-full w-full py-8 md:py-16 px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-[#EEF2FF] text-blue-600 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full"
          >
            Tecnologia & Inovação
          </motion.span>
          
          <motion.h2 
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-4xl md:text-[52px] text-[#1A1D21] font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"
          >
            Transformando Negócios com <span className="text-blue-600">Soluções Tecnológicas.</span>
          </motion.h2>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-[15px] md:text-base text-[#64748B] font-dmsans font-normal leading-relaxed max-w-[720px]"
          >
            Desenvolvemos soluções inovadoras que impulsionam a transformação digital. Nossa tecnologia combina excelência técnica com experiências excepcionais.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-[#070C14] w-full max-w-5xl mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div 
            className="absolute left-0 top-0 w-[600px] h-full" 
            style={{
              background: `
                radial-gradient(
                  ellipse 60% 50% at 0% 50%,
                  rgba(0, 102, 255, 0.3) 0%,
                  rgba(0, 102, 255, 0) 100%
                )
              `
            }}
          />
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-8 relative z-10">
            <motion.div 
              variants={cardImageVariants}
              className="w-full md:w-[42%] flex justify-center relative"
            >
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-2">
                <Image
                  src="https://framerusercontent.com/images/z9K1Bvlhbgk62X1FY6V9z1zuag.png"
                  alt="Imagem de Cartão"
                  width={320}
                  height={320}
                  className="w-[220px] md:w-[240px] h-auto object-contain"
                />
              </div>
              <motion.div 
                variants={cardImageVariants}
                className="absolute top-[30%] right-[65%] z-10 backdrop-blur-lg bg-white/5 rounded-2xl p-2"
              >
                <Image
                  src="https://framerusercontent.com/images/KlDG3WqhwIABtaNjXgKhWCda1FE.svg"
                  alt="Decoração"
                  width={400}
                  height={400}
                  className="w-[120px] h-auto"
                />
              </motion.div>
            </motion.div>

            <div className="w-full md:w-[58%] flex flex-col">
              <motion.h1 
                custom={0}
                variants={cardContentVariants}
                className="text-4xl md:text-[56px] font-dmsans font-medium leading-[1.1] tracking-[-0.03em] mb-6 max-w-[600px] text-white"
              >
                Sua <span className="text-blue-600">Experiência Digital</span> com Soluções Tecnológicas.
              </motion.h1>
              
              <motion.p 
                custom={1}
                variants={cardContentVariants}
                className="text-[#8A919F] text-base md:text-lg font-dmsans font-normal leading-[1.6] mb-6 max-w-[520px]"
              >
                Soluções digitais que transformam processos, oferecendo praticidade, controle e integração perfeita.
              </motion.p>
              
              <motion.button 
                variants={cardContentVariants}
                className="flex items-center justify-center w-fit px-6 py-3 bg-[#1A1D21] border border-zinc-700 hover:bg-[#222528] text-white text-[15px] font-dmsans font-medium rounded-lg transition-all duration-200 group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="mr-2">Quero saber mais</span>
                <div 
                  ref={scope} 
                  className="flex items-center justify-center w-5 h-5"
                >
                  <GoArrowUpRight className="text-lg" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
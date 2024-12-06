"use client"

import Image from "next/image";
import { useAnimate } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const handleRedirect = () => {
  window.open('https://wa.me/5562982166830', '_blank');
};

// Componente para as partículas
const Particle = ({ delay = 0 }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  
  const particleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: randomX + "%",
      y: randomY + "%",
    },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={particleVariants}
      initial="initial"
      animate="animate"
      className="absolute w-1 h-1 rounded-full bg-blue-400/30"
    />
  );
};

// Componente para os pontos animados
const AnimatedDot = ({ delay = 0 }) => {
  const dotVariants = {
    initial: { 
      y: 0,
      opacity: 0.3
    },
    animate: {
      y: [-10, 0, -10],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={dotVariants}
      initial="initial"
      animate="animate"
      className="absolute w-[3px] h-[3px] rounded-full bg-blue-400/20"
    />
  );
};

// Novo componente para as bolinhas animadas
const AnimatedCircle = ({ delay = 0 }) => {
  const circleVariants = {
    initial: { 
      y: 0,
      opacity: 0.2
    },
    animate: {
      y: [-15, 0, -15],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={circleVariants}
      initial="initial"
      animate="animate"
      className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/20"
    />
  );
};

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
        stiffness: 60,
        damping: 20,
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
      scale: 0.8,
      rotate: -5
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.5,
        duration: getTransitionDuration(),
        delay: 0.6,
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="bg-gradient-to-b from-blue-100 to-[#F4F6FA] h-full w-full py-8 md:py-16 px-8"
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
          {/* Efeitos de glow */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-500/10 rounded-full blur-[120px]" />

          {/* Blur superior esquerdo */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          {/* Container das bolinhas animadas */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <AnimatedCircle delay={i * 0.2} />
              </div>
            ))}
          </div>

          {/* Overlay sutil para melhorar contraste */}
          <div className="absolute inset-0 bg-[#070C14]/40 backdrop-blur-[1px]" />

          {/* Partículas de fundo */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <Particle key={i} delay={i * 0.2} />
            ))}
          </div>

          {/* Adicione os pontos animados */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <AnimatedDot delay={i * 0.2} />
              </div>
            ))}
          </div>

          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-[#070C14]/40 backdrop-blur-[2px]" />

          {/* Conteúdo existente */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-8 relative z-10">
            <motion.div 
              variants={cardImageVariants}
              className="w-full md:w-[42%] flex justify-center relative"
            >
              <div className="relative">
                <Image
                  src="/images/developer.svg"
                  alt="Desenvolvedor 3D"
                  width={420}
                  height={420}
                  className="w-[220px] md:w-[340px] h-auto object-contain relative z-10"
                />
                <div className="absolute -bottom-4 left-0 w-full">
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-[#070C14]/20 blur-xl" />
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#070C14] via-[#070C14]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070C14] via-[#070C14]/40 to-transparent opacity-60" />
                  <div className="absolute -bottom-2 left-0 w-full h-12 bg-gradient-to-t from-[#070C14] to-transparent" />
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-[58%] flex flex-col text-center md:text-left">
              <motion.h1 
                variants={cardContentVariants}
                className="text-4xl md:text-[56px] font-dmsans font-medium leading-[1.1] tracking-[-0.03em] mb-6 max-w-[600px] text-white"
              >
                Sua <span className="text-blue-600">Experiência Digital</span> com Soluções Tecnológicas.
              </motion.h1>
              
              <motion.p 
                variants={cardContentVariants}
                className="text-[#8A919F] text-base md:text-lg font-dmsans font-normal leading-[1.6] mb-6 max-w-[520px] mx-auto md:mx-0"
              >
                Soluções digitais que transformam processos, oferecendo praticidade, controle e integração perfeita.
              </motion.p>
              
              <motion.button 
                variants={cardContentVariants}
                className="flex items-center justify-center w-fit px-6 py-3 bg-[#1A1D21] border border-zinc-700 hover:bg-[#222528] text-white text-[15px] font-dmsans font-medium rounded-lg transition-all duration-200 group mx-auto md:mx-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleRedirect}
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
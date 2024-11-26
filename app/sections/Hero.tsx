"use client"

import { motion, useAnimate } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import StarField from "@/app/components/StarField";
import Image from 'next/image';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

interface ImageContainerProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ 
  src, 
  alt, 
  delay = 1.0, 
  className = "" 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8,
      ease: "easeOut",
      delay 
    }}
    className={`backdrop-blur-lg bg-white/5 rounded-3xl p-2 ${className}`}
  >
    <div className="relative w-full h-full">
      <Image 
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="w-full h-auto"
        priority
      />
    </div>
  </motion.div>
);

const Hero = () => {
  const [scope, animate] = useAnimate();

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

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 bg-gradient-to-b from-transparent to-black/90 md:bg-none"
      >
        <Image 
          src="https://framerusercontent.com/images/fGcjZ99aH15nOvlG5HEMNGs4ro.png"
          alt="Background gradient"
          width={1024}
          height={1024}
          className="w-full h-full block md:hidden lg:hidden xl:block object-cover opacity-50 md:opacity-100"
          priority
        />
      </motion.div>

      <StarField />
      
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 lg:px-6 xl:px-8 2xl:px-32 pt-12 lg:pt-28">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              }
            },
            hidden: {}
          }}
          className="flex flex-col max-w-3xl z-10 lg:ml-auto lg:mr-24 text-center lg:text-left px-4 lg:px-0 mt-8 lg:mt-0"
        >
          <motion.div
            variants={fadeInUpVariant}
            className="relative inline-block w-fit mb-4 md:mb-4 mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center px-1">
              <span className="text-sm md:text-md font-medium font-dmsans text-[#9BA1AC]">
                Mais de{""}
                <span className="text-blue-500 font-semibold"> 76.281</span>{" "}
                <span className="text-[#9BA1AC]">usuários impactados.</span>
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUpVariant}
            className="text-white text-3xl md:text-5xl xl:text-7xl max-w-lg xl:max-w-3xl mb-4 md:mb-4 font-semibold leading-[1.2] md:leading-[1.1] tracking-[-0.02em] font-poppins"
          >
            Evoluindo Soluções para a{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight"
              animate={{
                backgroundPosition: ["0%", "100%"],
                backgroundSize: ["200% 100%", "200% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ paddingBottom: '4px' }}
            >
              Era Digital.
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUpVariant}
            className="text-[#828E9D] text-lg md:text-xl leading-relaxed max-w-xl mb-8 opacity-80 font-normal font-dmsans mx-auto md:mx-0"
          >
            Descubra o Futuro da Tecnologia: Soluções Inovadoras, Experiências Simples e Resultados Extraordinários.
          </motion.p>

          <motion.div
            variants={fadeInUpVariant}
            className="mx-auto lg:mx-0"
          >
            <button
              className="flex items-center gap-2 px-6 py-3 text-md font-medium font-poppins text-white bg-[#0066FF] rounded-xl group transition duration-300 hover:bg-blue-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Explorar Soluções
              <div ref={scope}>
                <GoArrowUpRight className="text-lg transition-colors duration-300" />
              </div>
            </button>
          </motion.div>
        </motion.div>

        <div className="relative flex-1 h-[600px] z-10 mt-12 lg:mt-0">
          <div className="lg:hidden relative w-full h-full flex items-center justify-center">
            <div className="relative w-[260px] md:hidden">
              <ImageContainer 
                src="https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
                alt="Phone mockup"
              />
            </div>

            <div className="hidden md:block lg:hidden relative w-[280px]">
              <ImageContainer 
                src="https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
                alt="Phone mockup"
              />
            </div>
          </div>

          <div className="hidden lg:block relative w-full h-full">
            <ImageContainer 
              src="https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
              alt="Phone mockup"
              className="absolute top-0 right-[180px] w-[240px] z-10"
            />
            
            <ImageContainer 
              src="https://framerusercontent.com/images/bVPQ8bjFHh73fMSk2VNDePSoA.png"
              alt="Card mockup"
              className="absolute top-[80px] right-0 w-[240px] z-20"
              delay={1.2}
            />
            
            <ImageContainer 
              src="https://framerusercontent.com/images/aAo4r5F6F8W8XGsbOjQm2dwdJY.png?scale-down-to=512"
              alt="Trusted Users"
              className="absolute bottom-[180px] right-[280px] w-[220px] z-30"
              delay={1.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
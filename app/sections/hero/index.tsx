"use client"

import { motion, useAnimate } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import StarField from "@/app/components/StarField";
import Image from 'next/image';


const imageContainerVariant = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 60,
    rotate: -2
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
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
    variants={imageContainerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      delay,
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

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariant = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

const Hero = () => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate([
      [scope.current, { y: -20, opacity: 0 }, { duration: 0.2 }],
      [scope.current, { y: 20 }, { duration: 0 }],
      [scope.current, { y: 0, opacity: 1 }, { duration: 0.2 }]
    ]);
  };

  const handleMouseLeave = () => {
    animate([
      [scope.current, { y: 20, opacity: 0 }, { duration: 0.2 }],
      [scope.current, { y: -20 }, { duration: 0 }],
      [scope.current, { y: 0, opacity: 1 }, { duration: 0.2 }]
    ]);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <StarField />
      
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 lg:px-6 xl:px-8 2xl:px-32 pt-12 lg:pt-28">
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-3xl z-10 lg:ml-auto lg:mr-24 text-center lg:text-left px-4 lg:px-0 mt-8 lg:mt-0"
        >
          <motion.div
            variants={itemVariant}
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
            variants={itemVariant}
            className="text-white text-3xl md:text-5xl xl:text-7xl max-w-lg xl:max-w-3xl mb-4 md:mb-4 font-medium leading-[1.2] md:leading-[1.1] tracking-[-0.02em] font-poppins"
          >
            Evoluindo Soluções para a{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
              style={{ 
                paddingBottom: '4px',
              }}
            >
              Era Digital.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariant}
            className="text-[#828E9D] text-lg md:text-xl leading-relaxed max-w-xl mb-8 opacity-80 font-normal font-dmsans mx-auto md:mx-0"
          >
            Descubra o Futuro da Tecnologia: Soluções Inovadoras, Experiências Simples e Resultados Extraordinários.
          </motion.p>

          <motion.div
            variants={itemVariant}
            className="mx-auto lg:mx-0"
          >
            <button
              className="group flex items-center gap-2 px-6 py-3 text-md font-medium font-poppins text-white bg-[#0061FF] rounded-xl transition-all duration-300 hover:bg-blue-600"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Explorar Soluções
              <div className="relative h-[18px] w-[18px] overflow-hidden">
                <div ref={scope}>
                  <GoArrowUpRight className="text-lg absolute" />
                </div>
              </div>
            </button>
          </motion.div>
        </motion.div>

        <div className="relative flex-1 h-[600px] z-10 mt-12 lg:mt-0">
          <div className="absolute right-[100px] w-[500px] h-[500px] top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="absolute inset-0 
              bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
              from-blue-500/40 via-blue-600/20 to-transparent
              blur-3xl"
            />
            <div className="absolute inset-0 
              bg-[radial-gradient(circle_at_60%_50%,_var(--tw-gradient-stops))]
              from-blue-400/30 via-transparent to-transparent
              blur-2xl"
            />
          </div>

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
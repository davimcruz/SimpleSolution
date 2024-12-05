"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/dist/client/link";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import Lottie from 'lottie-react';
import animatedDashboard from "@/public/animation-dashboard.json";
import animatedDashboard2 from "@/public/animation-dashboard2.json";

export default function Features() {
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
            Simplificando Soluções Digitais.
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

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="max-w-[480px]"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="text-[40px] md:text-[48px] font-dmsans font-medium mb-6 leading-[1.2] tracking-[-0.02em]">
                Desenvolvimento Web Personalizado
              </h3>
              <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-8 font-dmsans font-light">
                Criamos soluções web sob medida para seu negócio, com tecnologias modernas e foco em performance, usabilidade e resultados.
              </p>
              <Link 
                href="https://wa.me/5562982166830" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white font-medium text-base px-4 py-2 rounded-lg transition-all group font-dmsans duration-300"
              >
                Fazer Orçamento
                <PiPaperPlaneTiltBold className="ml-2 text-md transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="relative flex justify-end"
            >
              <Lottie 
                animationData={animatedDashboard} 
                loop={true} 
                style={{ width: '100%', height: 'auto' }} 
              />
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="relative"
            >
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-2 w-[90%]">
              <Lottie 
                animationData={animatedDashboard2} 
                loop={true} 
                style={{ width: '100%', height: 'auto' }} 
              />
              </div>
            </motion.div>

            <motion.div
              custom={6}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="max-w-[480px]"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="text-[40px] md:text-[48px] font-dmsans font-medium mb-6 leading-[1.2] tracking-[-0.02em]">
                Sistemas Sob Medida
              </h3>
              <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-8 font-dmsans font-light">
                Desenvolvemos sistemas personalizados que atendem exatamente às necessidades do seu negócio. Do planejamento à implementação, criamos soluções escaláveis e de alta performance.
              </p>
              <Link 
                href="https://wa.me/5562982166830" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white font-medium text-base px-4 py-2 rounded-lg transition-all group font-dmsans duration-300"
              >
                Conhecer mais
                <GoArrowUpRight className="ml-2 text-md transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

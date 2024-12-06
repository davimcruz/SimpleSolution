"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaSmileWink } from "react-icons/fa";

import { FaUserFriends } from "react-icons/fa";

export default function MostUsed() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
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
      className="bg-[#070C14] h-full w-full py-32 md:py-40 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="max-w-[650px] space-y-6">
            <motion.span
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="bg-[#1A2333] text-blue-400 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full "
              >
              Referência em Tecnologia
            </motion.span>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-4xl md:text-[64px] text-white font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"            >
              Transformando Ideias em <span className="text-blue-600">Soluções Digitais</span> de Alto Impacto.
            </motion.h2>
          </div>

          <div className="space-y-4 lg:w-[500px] self-center">
            <motion.div
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-2"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-500/10 p-2.5 rounded-xl">
                          <FaUserFriends className="text-blue-600 text-2xl" />
                        </div>
                        <span className="text-4xl font-medium text-slate-800 font-dmsans">1.24M+</span>
                      </div>
                      <p className="text-slate-700 text-md font-normal font-dmsans">Usuários Atendidos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-black text-md font-normal font-dmsans">Experiência</span>
                      <div className="flex gap-1.5 mt-2">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-2"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-500/10 p-2.5 rounded-xl">
                          <FaSmileWink  className="text-blue-600 text-2xl" />
                        </div>
                        <span className="text-4xl font-medium text-slate-800 font-dmsans">98.9%</span>
                      </div>
                      <p className="text-slate-700 text-md font-normal font-dmsans">Satisfação dos Clientes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-black text-md font-normal font-dmsans">Avaliações</span>
                      <div className="flex gap-1 mt-2">
                        <FaStar className="text-blue-600 text-lg" />
                        <FaStar className="text-blue-600 text-lg" />
                        <FaStar className="text-blue-600 text-lg" />
                        <FaStar className="text-blue-600 text-lg" />
                        <FaStar className="text-blue-300 text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.05] 
            transition-all duration-300 hover:!scale-105 cursor-pointer"
          >
            <p className="text-4xl font-light text-blue-500 font-dmsans">23.021+</p>
            <p className="text-gray-500 mt-1 text-sm font-light font-dmsans">Clientes Ativos</p>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.05] 
            transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg 
            hover:shadow-blue-500/10  hover:!scale-105 cursor-pointer"
          >
            <p className="text-4xl font-light text-blue-500 font-dmsans">7.2%+</p>
            <p className="text-gray-500 mt-1 text-sm font-light font-dmsans">Redução de Custos</p>
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.05] 
            transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg 
            hover:shadow-blue-500/10 hover:!scale-105 cursor-pointer"
          >
            <p className="text-4xl font-light text-blue-500 font-dmsans">33.5%+</p>
            <p className="text-gray-500 mt-1 text-sm font-light font-dmsans">Aumento em Leads</p>
          </motion.div>

          <motion.div
            custom={7}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.05] 
            transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg 
            hover:shadow-blue-500/10 hover:!scale-105 cursor-pointer"
          >
            <p className="text-4xl font-light text-blue-500 font-dmsans">99.7+</p>
            <p className="text-gray-500 mt-1 text-sm font-light font-dmsans">Avaliações Positivas</p>
          </motion.div>
        </div>

        <motion.p
          custom={8}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center text-gray-400 text-lg font-dmsans font-normal max-w-4xl mx-auto mt-20"
        >
          Nossa expertise em desenvolvimento de software e compromisso com a inovação 
          nos tornou referência para empresas que buscam excelência em transformação digital.
        </motion.p>
      </div>
    </section>
  );
}
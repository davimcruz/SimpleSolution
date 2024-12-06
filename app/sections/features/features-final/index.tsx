"use client"

import { motion } from "framer-motion";
import { useRef } from "react";
import {  
  RiSettings4Line, 
  RiLightbulbLine,
  RiShieldLine, 
  RiStackLine, 
  RiCustomerService2Line,
  RiPieChartLine, 
  RiTimer2Line, 
  RiRocketLine,
  RiFlashlightLine
} from "react-icons/ri";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import { MdOutlineFiberSmartRecord } from "react-icons/md";

export default function FeaturesFinal() {
  const sectionRef = useRef(null);
 

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const miniFeatures = [
    {
      icon: <RiShieldLine />,
      text: "Proteção Avançada",
      tooltip: "Sistema de segurança multicamada que protege seus dados e aplicações contra ameaças modernas"
    },
    {
      icon: <RiStackLine />,
      text: "Arquitetura Escalável",
      tooltip: "Infraestrutura que cresce com seu negócio, garantindo performance mesmo com aumento de demanda"
    },
    {
      icon: <RiCustomerService2Line />,
      text: "Suporte Dedicado",
      tooltip: "Equipe especializada sempre pronta para resolver suas questões e garantir a continuidade do negócio"
    },
    {
      icon: <RiPieChartLine />,
      text: "Insights Precisos",
      tooltip: "Análises detalhadas e métricas relevantes para tomada de decisões estratégicas"
    },
    {
      icon: <RiTimer2Line />,
      text: "Disponibilidade 24/7",
      tooltip: "Monitoramento constante e alta disponibilidade para seus sistemas críticos"
    },
    {
      icon: <RiRocketLine />,
      text: "Performance Superior",
      tooltip: "Otimização contínua garantindo velocidade e eficiência em todas as operações"
    },
    {
      icon: <RiFlashlightLine />,
      text: "Desenvolvimento Ágil",
      tooltip: "Metodologia ágil que garante entregas rápidas e adaptação às mudanças do mercado"
    }
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={sectionRef} className="bg-white h-full w-full py-8 md:py-16 px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="bg-[#EEF2FF] text-blue-600 text-[14px] font-medium tracking-wide font-dmsans mb-8 py-2 px-8 rounded-full"
          >
            Ferramentas & Recursos Avançados
          </motion.span>
          
          <motion.h2 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="text-4xl md:text-[52px] text-[#1A1D21] font-dmsans font-medium leading-[1.15] tracking-[-0.02em] mb-5 max-w-3xl"
          >
            Maximize o Potencial do seu <span className="text-blue-600">Negócio Digital</span>
          </motion.h2>
          
          <motion.p 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="text-[15px] md:text-base text-[#64748B] font-dmsans font-normal leading-relaxed max-w-[720px]"
          >
            Explore recursos poderosos que impulsionam sua presença digital. Nossa tecnologia de ponta oferece as ferramentas necessárias para seu crescimento.
          </motion.p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl text-center"
          >
            <motion.div
              variants={iconVariants}
              className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <MdOutlineFiberSmartRecord className="text-blue-600 text-xl" />
            </motion.div>
            <h3 className="text-xl font-medium mb-4 text-[#1A1D21] font-dmsans">
              Desenvolvimento Inteligente
            </h3>
            <p className="text-[#64748B] text-[15px] leading-relaxed font-dmsans">
              Transformamos ideias em experiências digitais excepcionais, com foco em usabilidade e resultados mensuráveis.
            </p>
          </motion.div>

          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl text-center"
          >
            <motion.div
              variants={iconVariants}
              className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <RiSettings4Line className="text-blue-600 text-xl" />
            </motion.div>
            <h3 className="text-xl font-medium mb-4 text-[#1A1D21] font-dmsans">
              Automação Estratégica
            </h3>
            <p className="text-[#64748B] text-[15px] leading-relaxed font-dmsans">
              Otimizamos seus processos com sistemas inteligentes que elevam a eficiência operacional do seu negócio.
            </p>
          </motion.div>

          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl text-center"
          >
            <motion.div
              variants={iconVariants}
              className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <RiLightbulbLine className="text-blue-600 text-xl" />
            </motion.div>
            <h3 className="text-xl font-medium mb-4 text-[#1A1D21] font-dmsans">
              Consultoria Estratégica
            </h3>
            <p className="text-[#64748B] text-[15px] leading-relaxed font-dmsans">
              Guiamos sua jornada digital com insights valiosos e soluções tecnológicas que impulsionam o crescimento.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {miniFeatures.map((feature, index) => (
            <Tippy
              key={index}
              content={
                <div className="text-sm font-dmsans leading-relaxed max-w-[250px]">
                  {feature.tooltip}
                </div>
              }
              animation="shift-away"
              placement="top"
              duration={[200, 150]}
              className="!bg-[#1A1D21] !text-white !rounded-lg !shadow-lg !p-3"
            >
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <span className="text-blue-600 text-xl mr-2">{feature.icon}</span>
                <span className="text-[#1A1D21] text-[14px] font-medium font-dmsans">
                  {feature.text}
                </span>
              </div>
            </Tippy>
          ))}
        </div>
      </div>
    </section>
  );
}

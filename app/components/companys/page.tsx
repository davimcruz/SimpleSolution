'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CompanySlider = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { 
    once: true,
    margin: "-50px",
    amount: 0.3
  })
  
  const companies = [
    'https://framerusercontent.com/images/lo3NQV5s300QS0DSSxciQNNYAw.svg',
    'https://framerusercontent.com/images/njR4vc3CneMWk2Hb2Fssp9pHTbk.svg',
    'https://framerusercontent.com/images/wWb4slCaOduEWAivmJFstMjx6qc.svg',
    'https://framerusercontent.com/images/Y6yn57fYB15aSbFBhmwqiOzQrQ.svg',
  ]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let position = 0
    const speed = 0.5

    const scroll = () => {
      position += speed
      slider.scrollLeft = position

      if (position >= (slider.scrollWidth - slider.clientWidth) / 2) {
        position = 0
        slider.scrollLeft = 0
      }
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : { 
        opacity: 0, 
        y: 30 
      }}
      transition={{ 
        duration: 0.8,
        ease: [0.21, 0.35, 0.39, 0.99],
        opacity: { duration: 1 },
        y: { duration: 0.8 }
      }}
      className="relative w-full max-w-[1200px] mx-auto h-[100px] overflow-hidden -mt-10"
    >
      <div className="absolute top-0 bottom-0 left-0 w-[30px] z-10 
           pointer-events-none [box-shadow:inset_5px_0_8px_-5px_rgba(0,0,0,0.1)]" />
      
      <div 
        ref={sliderRef}
        className="flex gap-20 overflow-hidden whitespace-nowrap"
      >
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-20 min-w-max">
            {companies.map((company, index) => (
              <motion.div
                key={`${groupIndex}-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  opacity: 1 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  opacity: { duration: 0.2 }
                }}
              >
                <Image
                  src={company}
                  alt="Company logo"
                  width={150}
                  height={50}
                  className="object-contain opacity-50 transition-all duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute top-0 bottom-0 right-0 w-[30px] z-10 
           pointer-events-none [box-shadow:inset_-5px_0_8px_-5px_rgba(0,0,0,0.1)]" />
    </motion.div>
  )
}

export default CompanySlider

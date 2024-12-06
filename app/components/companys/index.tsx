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
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
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
      className="relative w-full max-w-[1200px] mx-auto h-[100px] overflow-hidden mt-10 md:-mt-10"
    >
      <div 
        ref={sliderRef}
        className="flex gap-20 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent_100%)]"
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
    </motion.div>
  )
}

export default CompanySlider

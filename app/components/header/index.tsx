"use client"

import Image from "next/image";
import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const links = [
  {
    name: "Sobre nós",
    href: "/#about",
  },
  {
    name: "Serviços", 
    href: "/#features",
  },
  {
    name: "Avaliações",
    href: "/#ratings",
  },
  {
    name: "Contate-nos",
    href: "/#contact",
  },
]

export default function Header() {
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-6 px-10 mx-auto"
    >
      <div className="flex lg:hidden justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/">
            <Image src="/images/logo-1.png" alt="Simple Solution" width={130} height={130} />
          </Link>
        </motion.div>

        <motion.button 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-2 px-2.5 bg-[#252931] rounded-lg"
        >
          <BsFillGridFill className="text-lg text-white"/>
        </motion.button>
      </div>

      <div className="hidden lg:flex justify-around items-center">
        <motion.div
          initial={{ x: -30, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <Link href="/">
            <Image src="/images/logo-1.png" alt="Simple Solution" width={150} height={120} />
          </Link>
        </motion.div>

        <motion.ul 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-8"
        >
          {links.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2 * (index + 1),
                ease: "easeOut"
              }}
            >
              <Link 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[#828E9D] hover:text-blue-500 transition-colors duration-300 text-lg font-dmsans font-normal relative flex items-center gap-2"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="https://wa.me/5562982166830" 
            className="flex items-center gap-2 px-6 py-2 text-md font-dmsans font-medium text-white bg-[#252931] border border-[#30343A] rounded-lg group transition-all duration-300 hover:bg-blue-600 hover:border-blue-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Marcar Reunião
            <div ref={scope}>
              <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
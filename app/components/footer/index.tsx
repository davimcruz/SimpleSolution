export default function Footer() {
  return (
    <footer className="bg-[#14161e] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">
          
          {/* Logo e descrição */}
          <div className="col-span-1">
            <img 
              src="/images/logo-1.png"
              alt="Simple Solution"
              className="h-12 mb-8"
            />
            <p className="text-gray-400 text-base font-dmsans leading-relaxed">
              Desenvolvemos soluções digitais inovadoras que transformam a maneira como sua empresa interage com o mundo.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-dmsans font-medium text-xl mb-6">Serviços</h3>
            <ul className="space-y-4 text-gray-400 font-dmsans text-lg">
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Desenvolvimento Web
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Aplicativos Mobile
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Consultoria Tech
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-dmsans font-medium text-xl mb-6">Empresa</h3>
            <ul className="space-y-4 text-gray-400 font-dmsans text-lg">
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Sobre Nós
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Projetos
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Contato
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-dmsans font-medium text-xl mb-6">Suporte</h3>
            <ul className="space-y-4 text-gray-400 font-dmsans text-lg">
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Termos de Uso
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Política de Privacidade
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Documentação API
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <hr className="border-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-white/10 to-blue-500/20 my-12" />
        </div>

        {/* Copyright e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-400 text-base mb-4 md:mb-0 font-dmsans">
            © 2024 Simple Solution. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 items-center">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 font-dmsans text-lg">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

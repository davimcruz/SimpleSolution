
export default function Footer() {
  return (
    <footer className="bg-[#070C14] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          
          {/* Logo e descrição */}
          <div className="col-span-1">
            <img 
              src="https://framerusercontent.com/images/AGPkgX5dQJGUFEV0yyQmnbMZsrw.svg"
              alt="Simple Solution"
              className="h-8 mb-6"
            />
            <p className="text-gray-400 text-sm font-dmsans">
              Desenvolvemos soluções digitais inovadoras que transformam a maneira como sua empresa interage com o mundo.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-dmsans font-medium mb-4">Serviços</h3>
            <ul className="space-y-3 text-gray-400 font-dmsans">
              <li>Desenvolvimento Web</li>
              <li>Aplicativos Mobile</li>
              <li>UI/UX Design</li>
              <li>Consultoria Tech</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-dmsans font-medium mb-4">Empresa</h3>
            <ul className="space-y-3 text-gray-400 font-dmsans">
              <li>Sobre Nós</li>
              <li>Projetos</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-dmsans font-medium mb-4">Suporte</h3>
            <ul className="space-y-3 text-gray-400 font-dmsans">
              <li>FAQ</li>
              <li>Termos de Uso</li>
              <li>Política de Privacidade</li>
              <li>Documentação API</li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <hr className="border-0 h-[1px] bg-gradient-to-r from-blue-500/20 via-white/10 to-blue-500/20 my-8" />
        </div>

        {/* Copyright e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 font-dmsans">
            © 2024 Simple Solution. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 font-dmsans">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 font-dmsans">Instagram</a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

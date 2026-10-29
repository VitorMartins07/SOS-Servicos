import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0B131A] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-[#EA5C1B]">
            SOS Serviços
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Conectando pessoas e profissionais para facilitar
            o acesso a serviços residenciais em Araçuaí e região.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Links rápidos
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#EA5C1B]">
              Início
            </Link>

            <Link to="/profissionais" className="hover:text-[#EA5C1B]">
              Profissionais
            </Link>

            <Link to="/como-funciona" className="hover:text-[#EA5C1B]">
              Como funciona
            </Link>

            <Link to="/sobre" className="hover:text-[#EA5C1B]">
              Sobre nós
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Faça parte do SOS Serviços
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            É profissional e deseja divulgar seus serviços?
            Solicite seu cadastro na plataforma.
          </p>

          <Link
            to="/cadastro"
            className="mt-5 inline-block rounded-lg bg-[#EA5C1B] px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Cadastre-se como profissional
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SOS Serviços.
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
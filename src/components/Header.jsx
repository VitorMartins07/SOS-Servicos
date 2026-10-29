import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { nome: "Início", caminho: "/" },
    { nome: "Profissionais", caminho: "/profissionais" },
    { nome: "Como funciona", caminho: "/como-funciona" },
    { nome: "Sobre nós", caminho: "/sobre" },
    { nome: "Área administrativa", caminho: "/admin/login" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-[#EA5C1B]"
          >
            SOS Serviços
          </Link>

          {/* Menu para computadores */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.caminho}
                to={link.caminho}
                className="text-sm hover:text-[#EA5C1B]"
              >
                {link.nome}
              </Link>
            ))}

            <Link
              to="/cadastro"
              className="rounded-lg bg-[#EA5C1B] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Cadastre-se como profissional
            </Link>
          </div>

          {/* Botão do menu mobile */}
          <button
            type="button"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-3xl text-[#0E0F11] md:hidden"
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu para celulares */}
        {menuAberto && (
          <div className="mt-5 flex flex-col gap-4 border-t border-gray-200 pt-5 md:hidden">
            {links.map((link) => (
              <Link
                key={link.caminho}
                to={link.caminho}
                onClick={() => setMenuAberto(false)}
                className="hover:text-[#EA5C1B]"
              >
                {link.nome}
              </Link>
            ))}

            <Link
              to="/cadastro"
              onClick={() => setMenuAberto(false)}
              className="rounded-lg bg-[#EA5C1B] px-5 py-3 text-center font-semibold text-white"
            >
              Cadastre-se como profissional
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
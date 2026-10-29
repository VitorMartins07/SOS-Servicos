import CardProfissional from "../components/CardProfissional";
import { useState } from "react";
import { profissionais } from "../data/profissionais";

export default function Profissionais() {
    const [busca, setBusca] = useState("");

    const profissionaisFiltrados = profissionais.filter((profissional) =>
    `${profissional.nome} ${profissional.profissao}`
        .toLowerCase()
        .includes(busca.toLowerCase().trim())
    );
  return (
    <>
      
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-[#0E0F11]">
            Encontre profissionais
          </h1>

          <p className="mt-4 text-gray-600">
            Conheça os profissionais disponíveis para serviços
            residenciais em Araçuaí.
          </p>
        <div className="mt-8">
            <input
                type="text"
                placeholder="Buscar por nome ou profissão..."
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 outline-none focus:border-[#EA5C1B]"
            />
        </div>  
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {profissionaisFiltrados.map((profissional) => (
                <CardProfissional
                key={profissional.id}
                id={profissional.id}
                nome={profissional.nome}
                profissao={profissional.profissao}
                cidade={profissional.cidade}
                experiencia={profissional.experiencia}
                avaliacao={profissional.avaliacao}
                />
                ))}
            </div>
            {profissionaisFiltrados.length === 0 && (
                <p className="mt-8 text-center text-gray-600">
                    Nenhum profissional encontrado.
                </p>
            )}
        </div>
     </main>
    </>
  );
}
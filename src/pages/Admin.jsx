import { useState } from "react";

const solicitacoes = [
  {
    id: 1,
    nome: "Roberto Almeida",
    profissao: "Eletricista",
    cidade: "Araçuaí, MG",
    experiencia: 8,
    telefone: "(33) 99999-1234",
    descricao: "Realizo instalações elétricas e manutenção residencial.",
    status: "pendente",
  },
  {
    id: 2,
    nome: "Fernanda Souza",
    profissao: "Pintora",
    cidade: "Araçuaí, MG",
    experiencia: 5,
    telefone: "(33) 98888-5678",
    descricao: "Trabalho com pintura residencial e acabamentos.",
    status: "pendente",
  },
];


export default function Admin() {
    const [cadastros, setCadastros] = useState(solicitacoes);

    function atualizarStatus(id, novoStatus) {
    setCadastros((anteriores) =>
        anteriores.map((profissional) =>
        profissional.id === id
            ? { ...profissional, status: novoStatus }
            : profissional
        )
    );
    }  
  return (
    <>
    
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-[#0E0F11]">
            Painel administrativo
          </h1>

          <p className="mt-3 text-gray-600">
            Gerencie as solicitações de cadastro dos profissionais.
          </p>

          <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              Cadastros pendentes
            </h2>

         <div className="mt-6 grid gap-6 md:grid-cols-2">
            {cadastros.map((profissional) => (
                <article
                 key={profissional.id}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                        profissional.status === "aprovado"
                        ? "bg-green-100 text-green-800"
                        : profissional.status === "rejeitado"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                    >
                    {profissional.status === "aprovado"
                        ? "Aprovado"
                        : profissional.status === "rejeitado"
                        ? "Rejeitado"
                        : "Aguardando aprovação"}
                </span>
                <h3 className="mt-5 text-xl font-bold">
                    {profissional.nome}
                </h3>

                <p className="mt-2 text-gray-600">
                    {profissional.profissao} • {profissional.cidade}
                </p>

                <p className="mt-3 text-sm text-gray-600">
                    Experiência: {profissional.experiencia} anos
                </p>

                <p className="mt-2 text-sm text-gray-600">
                    Contato: {profissional.telefone}
                </p>

                <p className="mt-4 text-sm text-gray-600">
                    {profissional.descricao}
                </p>

            <div className="mt-6 flex gap-3">
                <button
                type="button"
                onClick={() => atualizarStatus(profissional.id, "aprovado")}
                disabled={profissional.status !== "pendente"}
                className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
             >
                Aprovar
                </button>

                <button
                type="button"
                onClick={() => atualizarStatus(profissional.id, "rejeitado")}
                disabled={profissional.status !== "pendente"}
                className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                Rejeitar
                </button>
            </div>
                </article>
            ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
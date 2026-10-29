import { Link, useParams } from "react-router";
import { profissionais } from "../data/profissionais";

export default function PerfilProfissional() {
  const { id } = useParams();

  const profissional = profissionais.find(
    (item) => item.id === Number(id)
  );

  if (!profissional) {
    return (
      <>
        
        <main className="px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">
            Profissional não encontrado
          </h1>

          <Link
            to="/profissionais"
            className="mt-6 inline-block text-[#EA5C1B]"
          >
            Voltar aos profissionais
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      

      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/profissionais"
            className="text-[#EA5C1B] hover:underline"
          >
            ← Voltar aos profissionais
          </Link>

          <article className="mt-8 rounded-xl bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-4xl font-bold text-[#EA5C1B]">
                {profissional.nome.charAt(0)}
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  {profissional.nome}
                </h1>

                <p className="mt-2 text-lg text-gray-600">
                  {profissional.profissao}
                </p>

                <p className="mt-2 text-[#EA5C1B]">
                  ★ {profissional.avaliacao} (demonstrativo)
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">
                Sobre o profissional
              </h2>

              <p className="mt-4 text-gray-600">
                Profissional de {profissional.profissao.toLowerCase()}
                com {profissional.experiencia} anos de experiência,
                atendendo em {profissional.cidade}.
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">
                Informações
              </h2>

              <p className="mt-4 text-gray-600">
                📍 Localização: {profissional.cidade}
              </p>

              <p className="mt-2 text-gray-600">
                🛠️ Especialidade: {profissional.profissao}
              </p>

              <p className="mt-2 text-gray-600">
                ⏱️ Experiência: {profissional.experiencia} anos
              </p>
            </div>

            <button
              type="button"
              disabled
              className="mt-8 rounded-lg bg-gray-300 px-6 py-3 font-semibold text-gray-600"
            >
              Contato em breve
            </button>
          </article>
        </div>
      </main>
    </>
  );
}
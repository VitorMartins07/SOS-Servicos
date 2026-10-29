import { Link } from "react-router";

export default function ComoFunciona() {
  return (
    <>
      
      <main>
        <section className="bg-[#0B131A] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="font-semibold text-[#EA5C1B]">
              SIMPLES E PRÁTICO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Como funciona o SOS Serviços?
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              Conectamos pessoas que precisam de serviços
              residenciais a profissionais da região.
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">
              Para quem procura um profissional
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ["01", "Escolha o serviço", "Encontre a categoria desejada."],
                ["02", "Conheça os profissionais", "Consulte perfis e especialidades."],
                ["03", "Entre em contato", "Converse diretamente com o profissional."],
              ].map(([numero, titulo, descricao]) => (
                <div
                  key={numero}
                  className="rounded-xl border border-gray-200 p-6"
                >
                  <span className="text-3xl font-bold text-[#EA5C1B]">
                    {numero}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {titulo}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {descricao}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/profissionais"
              className="mt-8 inline-block rounded-lg bg-[#EA5C1B] px-6 py-3 font-semibold text-white"
            >
              Encontrar profissionais
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">
              Para profissionais
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ["01", "Solicite seu cadastro", "Preencha seus dados profissionais."],
                ["02", "Aguarde a aprovação", "O administrador analisará sua solicitação."],
                ["03", "Divulgue seus serviços", "Após a aprovação, seu perfil ficará visível."],
              ].map(([numero, titulo, descricao]) => (
                <div
                  key={numero}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <span className="text-3xl font-bold text-[#EA5C1B]">
                    {numero}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {titulo}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {descricao}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/cadastro"
              className="mt-8 inline-block rounded-lg bg-[#EA5C1B] px-6 py-3 font-semibold text-white"
            >
              Cadastre-se como profissional
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
export default function Sobre() {
  return (
    <>
      
      <main>
        <section className="bg-[#0B131A] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="font-semibold text-[#EA5C1B]">
              CONHEÇA NOSSO PROJETO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Sobre o SOS Serviços
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              Uma plataforma criada para conectar pessoas
              a profissionais de serviços residenciais,
              facilitando a busca por soluções para o dia a dia.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">
              Nossa história
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              O SOS Serviços surgiu como uma proposta de
              facilitar o encontro entre moradores e
              profissionais que oferecem serviços residenciais.
              Inicialmente pensado para Araçuaí, Minas Gerais,
              o projeto busca dar mais visibilidade aos
              profissionais locais e tornar a procura por
              serviços mais prática e acessível.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Nosso objetivo
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Aproximar clientes e profissionais por meio de
              uma plataforma simples, organizada e acessível,
              permitindo que as pessoas encontrem serviços,
              conheçam os profissionais e entrem em contato
              diretamente com eles.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
import CardCategoria from "../components/CardCategoria";
import CardEtapa from "../components/CardEtapa";

export default function Home() {
  return (
    <>
      <main>
        {/* Seção principal */}
        <section className="bg-[#0B131A] px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-semibold text-[#EA5C1B]">
              SERVIÇOS RESIDENCIAIS EM ARAÇUAÍ
            </p>

            <h1 className="max-w-2xl text-4xl font-bold md:text-6xl">
              Precisando de ajuda com sua casa?
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              Encontre profissionais para reformas, reparos e
              serviços residenciais de forma simples e rápida.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/profissionais"
                className="rounded-lg bg-[#EA5C1B] px-6 py-3 font-semibold text-white hover:bg-orange-700"
              >
                Encontrar profissional
              </a>

              <a
                href="#como-funciona"
                className="rounded-lg border border-gray-500 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Como funciona
              </a>
            </div>
          </div>
        </section>

        {/* Categorias de serviços */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#0E0F11]">
              Encontre o profissional ideal
            </h2>

            <p className="mb-12 text-center text-gray-600">
              Escolha o serviço que você precisa e encontre profissionais
              para ajudar.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <CardCategoria nome="Eletricista" icone="⚡" />
              <CardCategoria nome="Encanador" icone="🔧" />
              <CardCategoria nome="Pintor" icone="🎨" />
              <CardCategoria nome="Pedreiro" icone="🧱" />
              <CardCategoria nome="Marceneiro" icone="🪚" />
              <CardCategoria nome="Vidraceiro" icone="🪟" />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section
          id="como-funciona"
          className="bg-gray-50 px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-center text-3xl font-bold">
              Como funciona?
            </h2>

            <p className="mb-12 text-center text-gray-600">
              Encontrar ajuda para sua casa é simples!
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CardEtapa
                numero="01"
                titulo="Escolha o serviço"
                descricao="Selecione a categoria do serviço que você precisa."
              />

              <CardEtapa
                numero="02"
                titulo="Encontre profissionais"
                descricao="Conheça os profissionais disponíveis na plataforma."
              />

              <CardEtapa
                numero="03"
                titulo="Entre em contato"
                descricao="Converse com o profissional e combine o atendimento."
              />

              <CardEtapa
                numero="04"
                titulo="Avalie o serviço"
                descricao="Compartilhe sua experiência após o atendimento."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
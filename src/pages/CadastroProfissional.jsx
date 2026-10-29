import { useState } from "react";

export default function CadastroProfissional() {
  const [mensagem, setMensagem] = useState("");

  function enviarCadastro(evento) {
    evento.preventDefault();

    setMensagem(
      "Demonstração: solicitação preenchida. O envio para aprovação será habilitado em breve."
    );
  }

  return (
    <>
      
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
          <h1 className="text-3xl font-bold text-[#0E0F11]">
            Cadastre-se como profissional
          </h1>

          <p className="mt-3 text-gray-600">
            Preencha suas informações para solicitar a publicação
            do seu perfil no SOS Serviços.
          </p>

          <form onSubmit={enviarCadastro} className="mt-8 space-y-5">
            <div>
              <label htmlFor="nome" className="mb-2 block font-medium">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Digite seu nome completo"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="profissao" className="mb-2 block font-medium">
                Profissão
              </label>
              <select
                id="profissao"
                name="profissao"
                required
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              >
                <option value="" disabled>
                  Selecione sua profissão
                </option>
                <option>Eletricista</option>
                <option>Encanador</option>
                <option>Pintor(a)</option>
                <option>Pedreiro(a)</option>
                <option>Marceneiro(a)</option>
                <option>Vidraceiro(a)</option>
              </select>
            </div>

            <div>
              <label htmlFor="cidade" className="mb-2 block font-medium">
                Cidade e bairro
              </label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                required
                placeholder="Ex.: Araçuaí, Centro"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="experiencia" className="mb-2 block font-medium">
                Anos de experiência
              </label>
              <input
                id="experiencia"
                name="experiencia"
                type="number"
                min="0"
                required
                placeholder="Ex.: 5"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="mb-2 block font-medium">
                Telefone ou WhatsApp
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(33) 99999-9999"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="descricao" className="mb-2 block font-medium">
                Sobre você e seus serviços
              </label>
              <textarea
                id="descricao"
                name="descricao"
                rows="4"
                required
                placeholder="Conte um pouco sobre sua experiência e os serviços que realiza..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#EA5C1B] py-3 font-semibold text-white hover:bg-orange-700"
            >
              Solicitar cadastro
            </button>

            {mensagem && (
              <p role="status" className="text-center text-sm text-[#EA5C1B]">
                {mensagem}
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
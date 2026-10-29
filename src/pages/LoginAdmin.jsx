
export default function LoginAdmin() {
  function entrar(evento) {
    evento.preventDefault();

    alert(
      "Demonstração: o acesso administrativo será ativado na versão final."
    );
  }

  return (
    <>
    

      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
          <div className="mb-5 text-center text-4xl">🔒</div>

          <h1 className="text-center text-3xl font-bold text-[#0E0F11]">
            Área administrativa
          </h1>

          <p className="mt-4 text-center text-gray-600">
            Área destinada exclusivamente aos administradores do
            SOS Serviços. Se você possui autorização, faça login
            para continuar.
          </p>

          <form onSubmit={entrar} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block font-medium">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                required
                placeholder="Digite seu e-mail"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="senha" className="mb-2 block font-medium">
                Senha
              </label>

              <input
                id="senha"
                type="password"
                required
                placeholder="Digite sua senha"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#EA5C1B] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#EA5C1B] py-3 font-semibold text-white hover:bg-orange-700"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Acesso restrito a administradores autorizados.
          </p>
        </div>
      </main>
    </>
  );
}
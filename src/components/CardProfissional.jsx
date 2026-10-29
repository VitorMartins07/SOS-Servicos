import { Link } from "react-router";

export default function CardProfissional({
  id,  
  nome,
  profissao,
  cidade,
  experiencia,
  avaliacao,
}) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-[#EA5C1B]">
        {nome.charAt(0)}
      </div>

      <h2 className="text-xl font-bold text-[#0E0F11]">
        {nome}
      </h2>

      <p className="mt-1 text-gray-600">
        {profissao} • {cidade}
      </p>

      <p className="mt-3 text-sm text-gray-600">
        {experiencia} anos de experiência
      </p>

      <p className="mt-2 text-sm text-[#EA5C1B]">
        ★ {avaliacao} (demonstrativo)
      </p>

      <Link
        to={`/profissionais/${id}`}
        className="mt-5 block w-full rounded-lg bg-[#EA5C1B] px-5 py-3 text-center font-semibold text-white hover:bg-orange-700"
      >
        Ver perfil
      </Link>
    </article>
  );
}
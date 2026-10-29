export default function CardEtapa({ numero, titulo, descricao }) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-sm">
      <span className="text-3xl font-bold text-[#EA5C1B]">
        {numero}
      </span>

      <h3 className="mt-4 text-lg font-semibold text-[#0E0F11]">
        {titulo}
      </h3>

      <p className="mt-2 text-gray-600">
        {descricao}
      </p>
    </div>
  );
}
export default function CardCategoria({ nome, icone }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
      <div className="mb-4 text-4xl">{icone}</div>

      <h3 className="text-lg font-semibold text-[#0E0F11]">
        {nome}
      </h3>
    </div>
  );
}
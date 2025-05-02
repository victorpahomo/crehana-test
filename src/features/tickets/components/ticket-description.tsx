export const TicketDescription = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-900 mb-4">Problema</h2>
      <div className="prose prose-purple">
        <p className="mb-4 text-gray-600">
          Vania trabaja en una taquilla de cine. Cada boleto cuesta $25. Los
          clientes están en una cola y cada uno tiene una sola moneda de $25,
          $50 o $100. Vania comienza con ninguna moneda. Puede vender un boleto
          a cada persona y dar cambio correcto?
        </p>
        <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-400 mb-4">
          <h3 className="text-md font-semibold text-purple-900 mb-2">
            Explicación de los resultados:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>
              <span className="font-medium text-green-600">Exito</span> - Vania
              puede vender boletos a todos en la cola.
            </li>
            <li>
              <span className="font-medium text-red-600">Falló</span> - Vania no
              puede dar cambio correcto en algún momento.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

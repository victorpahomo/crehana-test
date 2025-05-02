import CheckSvg from "@/assets/react-svg/check";
import XSvg from "@/assets/react-svg/x";

interface TicketResultProps {
  result: string;
  queue: number[];
}

/**
 * Component to show the result of the ticket validation
 * @param result - Result of the validation
 * @param queue - Queue of bills
 * @returns Component of the result of the ticket validation
 */
export const TicketResult = ({ result, queue }: TicketResultProps) => {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-900 mb-4">
        Resultado de la validación
      </h2>

      <div className="flex items-center mb-3">
        <div
          className={`mr-3 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            result === "YES" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {result === "YES" ? (
            <CheckSvg width={24} height={24} color="#16a34a" />
          ) : (
            <XSvg width={24} height={24} color="#dc2626" />
          )}
        </div>

        <div>
          <p className="text-lg font-semibold">
            {result === "YES" ? "Exito" : "Falló"}
          </p>
          <p className="text-sm text-gray-600">
            {result === "YES"
              ? "Vania puede vender billetes a todos en la cola."
              : "Vania no puede dar cambio en algún punto."}
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-purple-50 rounded-md">
        <p className="text-sm text-gray-700 mb-2 font-medium">
          Cola utilizada para la validación:
        </p>
        <div className="flex flex-wrap gap-2">
          {queue.map((bill, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-medium rounded-md ${
                bill === 25
                  ? "bg-green-100 text-green-800"
                  : bill === 50
                  ? "bg-blue-100 text-blue-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              ${bill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

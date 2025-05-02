"use client";
import { tickets } from "../utils/tickets";

interface TicketExamplesProps {
  onSelectExample: (queue: number[]) => void;
}

/**
 * Ticket Examples component
 * @param {TicketExamplesProps} onSelectExample - The function to handle the selected example
 * @returns {React.ReactNode} The Ticket Examples component
 */
export const TicketExamples = ({ onSelectExample }: TicketExamplesProps) => {
  const examples = [
    [25, 25, 50],
    [25, 100],
    [25, 25, 50, 50, 100],
    [25, 25, 25, 100],
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-900 mb-4">Ejemplos</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {examples.map((example, index) => (
          <div
            key={index}
            className="card p-4 border border-purple-100 transition-all hover:border-purple-300"
          >
            <div className="flex justify-between mb-2">
              <p className="font-medium text-purple-900">Ejemplo {index + 1}</p>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  tickets(example) === "YES"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {tickets(example)}
              </span>
            </div>

            <p className="mb-3 text-sm text-gray-600">
              Cola: <span className="font-mono">[{example.join(", ")}]</span>
            </p>

            <button
              onClick={() => onSelectExample(example)}
              className="w-full mt-2 px-3 py-2 text-sm bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-md transition-colors"
            >
              Usar este ejemplo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";
import { useState } from "react";

import TicketSvg from "@/assets/react-svg/ticket";
import { tickets } from "../utils/tickets";

interface TicketFormProps {
  onResult: (result: string, queue: number[]) => void;
}

/**
 * Component to test the ticket validation algorithm
 * @param onResult - Function to handle the result of the validation
 * @returns Component to test the ticket validation algorithm
 */
export const TicketForm = ({ onResult }: TicketFormProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Parse input string to array of numbers
      const queue = input
        .split(",")
        .map((val) => val.trim())
        .filter((val) => val) // Filter empty strings
        .map((val) => {
          const num = Number(val);
          if (isNaN(num)) {
            throw new Error(`Entrada inválida: "${val}" no es un número`);
          }
          if (![25, 50, 100].includes(num)) {
            throw new Error(
              `Valor de billete inválido: ${num}. Solo se permiten 25, 50, o 100`
            );
          }
          return num;
        });

      // Run the algorithm
      const result = tickets(queue);
      onResult(result, queue);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      onResult("", []);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-900 mb-4">
        Probar el Algoritmo
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="queue"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Ingresar cola (separado por comas: 25, 50, o 100)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <TicketSvg width={16} height={16} color="#a78bfa" />
            </div>
            <input
              id="queue"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ejemplo: 25,25,50,100"
              className="w-full pl-10 pr-4 py-2.5 bg-purple-50 border border-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Ver Resultado
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

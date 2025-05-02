"use client";
import { useState } from "react";

import UILayout from "@/components/layout/ui-layout";
import {
  TicketDescription,
  TicketForm,
  TicketExamples,
  TicketResult,
} from "@/features/tickets/components";

export default function TicketsPage() {
  const [result, setResult] = useState<string>("");
  const [currentQueue, setCurrentQueue] = useState<number[]>([]);

  const handleResult = (newResult: string, queue: number[]) => {
    setResult(newResult);
    setCurrentQueue(queue);
  };

  const handleSelectExample = (queue: number[]) => {
    import("@/features/tickets/utils/tickets").then(({ tickets }) => {
      const result = tickets(queue);
      setResult(result);
      setCurrentQueue(queue);
    });
  };

  return (
    <UILayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">
          Algoritmo de Validación de Tickets
        </h1>
        <p className="text-gray-600">
          Prueba un algoritmo que determina si se puede dar cambio correctamente
          a todos los clientes en una cola.
        </p>
      </div>

      <TicketDescription />

      <TicketForm onResult={handleResult} />

      {result && <TicketResult result={result} queue={currentQueue} />}

      <TicketExamples onSelectExample={handleSelectExample} />
    </UILayout>
  );
}

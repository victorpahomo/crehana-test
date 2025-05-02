/**
 * Checks if Vania can sell a ticket to each person in the queue and give change
 * with the money she has at that moment.
 *
 * @param peopleInQueue - Array of bill values (25, 50, or 100)
 * @returns "YES" if Vania can sell a ticket to each person, "NO" otherwise
 */
export function tickets(peopleInQueue: number[]): "YES" | "NO" {
  // Llevo un registro de los billetes disponibles para dar cambio
  let bills25 = 0;
  let bills50 = 0;

  // Voy a procesar a cada persona en la cola
  for (const bill of peopleInQueue) {
    if (bill === 25) {
      // No necesito dar cambio para billetes de $25 - solo lo agrego a mi caja
      bills25++;
    } else if (bill === 50) {
      // Necesito dar $25 de cambio
      // Verifico si tengo suficientes billetes de $25 para dar cambio
      if (bills25 === 0) {
        return "NO"; // No puedo dar cambio, fallo inmediatamente
      }
      bills25--;
      bills50++;
    } else if (bill === 100) {
      // Intento dar el cambio óptimo para billetes de $100
      // Primero pruebo con una combinación de $50 + $25 (si está disponible)
      if (bills50 >= 1 && bills25 >= 1) {
        bills50--;
        bills25--;
      } else if (bills25 >= 3) {
        // Si no tengo un billete de $50, uso tres billetes de $25
        bills25 -= 3;
      } else {
        // No tengo suficiente cambio disponible
        return "NO";
      }
    }
  }

  // Si he procesado a todos exitosamente, devuelvo YES
  return "YES";
}

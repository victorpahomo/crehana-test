/**
 * Spinner component
 * @returns Spinner Loading component
 */
const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-12 h-12 border-t-2 border-purple-500 border-solid rounded-full animate-spin mb-4"></div>
      <div className="text-purple-500 font-medium">Cargando información...</div>
    </div>
  );
};

export default Spinner;

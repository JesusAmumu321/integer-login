import React from "react";
import Formulario from "./formulario";
function App() {
  return (
    <div className="bg-custom-bg min-h-screen flex items-center justify-center p-4 font-roboto">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-auto md:h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden">
        {/*imagen del poderoso med & Track*/}
        <div className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
            <img
              src="logo.svg"
              className="h-32 w-32 rounded-full object-cover shadow-lg mb-4"
            />
            <div className="text-white text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Med & Track
              </h1>
              <p className="text-lg md:text-xl">Su compañero de salud</p>
            </div>
          </div>
        </div>
        {/* componente formulario */}
        <Formulario />
      </div>
    </div>
  );
}

export default App;

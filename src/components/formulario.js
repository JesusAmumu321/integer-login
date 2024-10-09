import React from "react";

function Formulario() {
  return (
    <div className="w-full md:w-1/2 bg-custom-form p-6 md:p-8 lg:p-12 flex flex-col justify-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
          ¡Bienvenido de nuevo!
        </h2>
        <p className="mb-8 text-xl">
          ¿No tiene una cuenta? {" "/*espacio en blanco con sintaxis JSX*/}
          <a
            href="#"
            className="text-blue-600 font-roboto italic hover:not-italic hover:text-black hover:ease-in-out hover:duration-300"
          >
            Regístrese aquí
          </a>
        </p>
      </div>

      <form className="space-y-5 md:space-y-7" id="loginForm">
        <div>
          <label className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
            Dirección de correo electrónico{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            required
            placeholder="Ingrese su correo electrónico."
            className="w-full px-3 py-2 text-base md:text-l border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="contrasena"
            id="contrasena"
            minLength="8"
            required
            placeholder="Ingrese su contraseña."
            className="w-full px-3 py-2 text-base md:text-l border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-end">
          <button className="w-full sm:w-auto relative inline-flex items-center justify-center px-6 py-2 overflow-hidden rounded-lg group bg-black text-white hover:text-white text-s mx-1 sm:mx-2 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-200 ease-in-out z-10">
              Inicie sesión
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;

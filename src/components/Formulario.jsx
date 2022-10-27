

export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold text-lg">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5">
            <div className="mb-5">
              <label
                htmlFor="mascota"
                className="block text-gray-700 uppercase font-bold"
                >
                  Nombre Mascota
              </label>
              <input
                  id="mascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="
                  border-2 
                  w-full 
                  p-2
                  mt-2 
                  placeholder-gray-400 
                  rounded-md"
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="propietario"
                className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
              </label>
              <input 
                id="propietario"
                type="text"
                placeholder="Nombre del propietario"
                className="
                border-2 
                w-full 
                p-2 
                mt-2 
                placeholder-gray-400
                rounded-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 uppercase font-bold">
                  Email
                </label>
                <input 
                  id="email"
                  type="text"
                  placeholder="Email del propietario"
                  className="
                  border-2
                  w-full
                  p-2
                  mt-2
                  placeholder-gray-400
                  rounded-md
                  "
                />
            </div>
            <div className="mb-5">
              <label 
                htmlFor="alta"
                className="block text-gray-700 uppercase font-bold"
              >
                Alta
              </label>
              <input
                id="alta"
                type="date"
                placeholder="Fecha de Alta"
                className="
                border-2
                w-full
                p-2
                mt-2
                placeholder-gray-400
                rounded-md"
              />
            </div>
            <div className="mb-5">
              <label 
                htmlFor="sintomas"
                className="block text-gray-700 uppercase font-bold"
              >
                Sintomas
              </label>
              <textarea 
                id="sintomas"
                className="
                border-2
                w-full
                p-2
                mt-2
                placeholder-gray-400
                rounded-md
                "
              />
            </div>

            <input 
              type="submit"
              className="
                bg-indigo-600 
                w-full 
                p-3 
                text-white 
                uppercase 
                font-bold 
                rounded-md
                hover:bg-indigo-700
                cursor-pointer
                transition-all
                "
              value="Agregar Paciente"
            />

        </form>
    </div>
  )
}

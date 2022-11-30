import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMostFoughtVillanoByHeroe,
  fetchEditDetails,
  selectMostFought,
  selectDetails,
  selectAgenda,
  fetchAgenda,
  selectBestSponsor,
  getBestSponsor,
  createSponsorBySuper,
  createEventBySuper
} from "../../store/features/heroesSlice";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import cuid from "cuid";
export function DetailCharacter() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const agenda = useSelector(selectAgenda);
  const details = useSelector(selectDetails);
  const mostFought = useSelector(selectMostFought);
  const bestSponsor = useSelector(selectBestSponsor);

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [origin, setOrigin] = useState("");

  const [titulo, setTitulo] = useState("");
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");
  const [descripcion, setDesc] = useState("");
  const [lugar, setLugar] = useState("");
  useEffect(() => {
    const getData = async () => {
      Promise.all[
        (dispatch(fetchEditDetails(id)),
        dispatch(fetchAgenda(id)),
        dispatch(fetchMostFoughtVillanoByHeroe(id)),
        dispatch(getBestSponsor(id)))
      ];
    };
    getData();
  }, []);
  if (details.length !== 0) {
    return (
      <div className="w-screen h-screen">
        <Navbar />
        <div className="m-10">
          <h1 className="mb-5 underline font-bold text-4xl">
            Details of guardian 🦸🏻
          </h1>
          <img className="my-5" src={details.image_link} />
          <h1 className="text-3xl">Heroe: {details.nombre}</h1>
          <h1 className="text-3xl">Origin: {details.origen}</h1>
          <h1 className="text-3xl">Relation: {details.relaciones}</h1>
          <h1 className="text-3xl">Rol: {details.rol_super}</h1>
          <div className="flex flex-col">
            <h1 className="text-3xl mt-10 underline font-bold"> Sponsors:</h1>
            {details.patrocinadores.length > 0 ? (
              details.patrocinadores.map((ag) => {
                return (
                  <div className="mt-4 mb-4">
                    <p className="text-3xl">Name:{ag.nombre} </p>
                    <p className="text-3xl"> $:{ag.monto}</p>
                    <p className="text-3xl">Money origin: {ag.origen_monto}</p>
                  </div>
                );
              })
            ) : (
              <h1 className="text-3xl">No records found.</h1>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl mt-10 underline font-bold">
              {" "}
              Best Sponsor:
            </h1>
            {[bestSponsor].length > 0 ? (
              [bestSponsor].map((ag) => {
                return (
                  <div className="mt-4 mb-4">
                    <p className="text-3xl">Name:{ag.nombre} </p>
                    <p className="text-3xl"> $:{ag.monto}</p>
                    <p className="text-3xl">Money origin: {ag.origen_monto}</p>
                  </div>
                );
              })
            ) : (
              <h1 className="text-3xl">No records found.</h1>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl underline font-bold">Traits:</h1>
            {details.rasgosSuper.map((trait) => {
              return (
                <h1 className="mr-5 text-3xl" key={cuid()}>
                  {trait.rasgo.titulo}
                </h1>
              );
            })}
          </div>
          {agenda.length > 0 ? (
            agenda.map((ag) => {
              return <h1>{ag.nombre}</h1>;
            })
          ) : (
            <h1 className="text-3xl">Agenda: No records found.</h1>
          )}
          <h1 className="mt-5 underline font-bold text-4xl">
            Most fought Villian by heroe 💀
          </h1>
          {mostFought.villano !== undefined && (
            <div>
              <h1 className="text-3xl">Name: {mostFought?.villano?.nombre}</h1>
              <h1 className="text-3xl">Age: {mostFought?.villano?.edad}</h1>
              <h1 className="text-3xl">
                Rol: {mostFought?.villano?.rol_super} - Origin:{" "}
                {mostFought?.villano?.origen}
              </h1>
              <h1 className="text-3xl">
                Relation: {mostFought?.villano?.relaciones}
              </h1>
            </div>
          )}
          <div className="mt-10">
            <h1 className="text-3xl underline font-bold">Fights:</h1>
            {mostFought?.peleas?.length > 0 ? (
              mostFought.peleas.map((fight) => {
                return fight.peleas.map((f) => {
                  return (
                    <>
                      <p className="text-3xl">
                        <span className="underline font-bold">Fight:</span>
                        {fight.titulo}{" "}
                        <span className="underline font-bold">Super:</span>{" "}
                        {f.super.nombre}{" "}
                        <span className="underline font-bold">Won:</span>
                        {f.gana ? "Yes" : "No"}
                      </p>
                    </>
                  );
                });
              })
            ) : (
              <h1 className="text-3xl">No records found.</h1>
            )}
          </div>

          <h1 className="mt-7 text-3xl underline font-bold">Agenda:</h1>
          {agenda.length > 0 ? (
            agenda.map((ag) => {
              return (
                <div>
                  <h1 className="text-3xl">Title: {ag.titulo}</h1>
                  <h1 className="text-3xl">Description: {ag.descripcion}</h1>
                  <h1 className="text-3xl">Place: {ag.lugar}</h1>
                </div>
              );
            })
          ) : (
            <h1 className="text-3xl">No record found.</h1>
          )}
          <div className=" flex w-full">
            <div class="mr-10">
              <h1 className="mt-5 underline font-bold text-4xl">
                Create Sponsor
              </h1>
              <div className="flex flex-col w-44">
                <label>Name</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Value</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setValue(e.target.value)}
                />
                <label>Origin</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <button className="rounded px-2 py-1 border-2 mt-2" onClick={dispatch(createSponsorBySuper({
                super_id: details.super_id,
                nombre: name,
                monto: parseFloat(value),
                origen_monto: origin
              }))}>Save</button>
            </div>

            <div>
              <h1 className="mt-5 underline font-bold text-4xl">
                Create Event
              </h1>

              <div className="flex flex-col w-44">
                <label>Titulo</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Fecha Inicio</label>
                <input 
                  type="date" 
                  className="rounded-md text-black"
                  onChange={(e) => setInicio(e.target.value)}
                />
                <label>Fecha Fin</label>
                <input 
                  type="date" 
                  className="rounded-md text-black"
                  onChange={(e) => setFin(e.target.value)}
                />
                <label>descripcion</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <label>lugar</label>
                <input
                  className="rounded-md text-black"
                  onChange={(e) => setLugar(e.target.value)}
                />
              </div>
              <button className="rounded px-2 py-1 border-2 mt-2" onClick={dispatch(createEventBySuper({
                super_id: details.super_id,
                titulo: titulo,
                inicio: new Date(inicio),
                fin: new Date(fin),
                descripcion: descripcion,
                lugar: lugar
              }))}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className="w-screen h-screen">
      <Navbar />
      <div class="mt-10">
        <h1>Waiting for data...</h1>
      </div>
    </div>;
  }
}

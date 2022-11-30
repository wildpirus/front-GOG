import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetVillians,
  selectVillians,
  selectVilliansByOrigin,
  selectVilliansByWeakness,
  fetchVilliansByWeakness,
  fetchVilliansByOrigin,
  fetchVilliansByName,
  fetchWorstVillainAgainstTeen,
  selectVilliansByName,
  selectWorstVillainAgainstTeen
} from "../../store/features/villiansSlice";
import { Card } from "../../components/card/card";
import cuid from "cuid";
export function Villians() {
  const dispatch = useDispatch();
  const villians = useSelector(selectVillians);
  const villiansByName = useSelector(selectVilliansByName);
  const villiansByOrigin = useSelector(selectVilliansByOrigin);
  const villiansByWeakness = useSelector(selectVilliansByWeakness);
  const villianAgainstTeen = useSelector(selectWorstVillainAgainstTeen);

  useEffect(() => {
    const getData = async () => {
      await Promise.all[
        dispatch(fetchGetVillians())
        ,dispatch(fetchWorstVillainAgainstTeen())]
    };
    getData();
  }, []);

  const [typed, setTyped] = useState("");
  const [selected, setSelected] = useState("1");

  useEffect(() => {
    const getVilliansByName = async (typed) => {
      if(selected === "1"){
        await dispatch(fetchVilliansByName(typed));
      }
      if(selected === "2"){
        await dispatch(fetchVilliansByOrigin(typed));
      }
      if(selected === "3"){
        await dispatch(fetchVilliansByWeakness(typed));
      }

    };

    if (typed !== "") {
      getVilliansByName(typed);
    }
  }, [typed]);

  const getOption = () =>{
    if(selected === "1"){
      return villiansByName;
    }
    if(selected === "2"){
      return villiansByOrigin;

    }
    if(selected === "3"){
      return villiansByWeakness

    }
  }

  return (
    <section className="h-screen">
      <Navbar />
      <div className="mt-5 flex items-center justify-center">
        <h1>Search your villian by:</h1>
        <select value={selected} onChange={(e)=> setSelected(e.target.value)} className="rounded-md ml-2 outline-none text-black">
          <option value="1">Name</option>
          <option value="2">Origin</option>
          <option value="3">Weakness</option>
        </select>
        <input
          className="ml-3 rounded-md outline-none p-1 text-black"
          onChange={(e) => setTyped(e.target.value)}
        />
      </div>
      <div className="m-10">
      {typed !== "" ? (
        getOption().length > 0 ? (
          getOption().map((villian) => {
            return (
              <Card key={cuid()}>
                <h1>Name: {villian.nombre}</h1>
                <p>Edad:{villian.edad}</p>
                <p>Origen: {villian.origen}</p>
                <p>Relaciones: {villian.relaciones}</p>
              </Card>
            );
          })
        ) : (
          <h1>No records found.</h1>
        )
      ) : (
        <>
            <h1 className="text-3xl">Villanos</h1>
            {villians.map((villian) => {
              return (
                <Card key={cuid()}>
                  <div class="flex flex-col">
                    <div className="mb-3"> 
                      <img src={villian.image_link} />
                    </div>
                    <div>
                      <h1>Name: {villian.nombre}</h1>
                      <p>Edad:{villian.edad}</p>
                      <p>Origen: {villian.origen}</p>
                      <p>Relaciones: {villian.relaciones}</p>
                      <p>Habilidades: {villian.rasgosSuper.map(r => r.rasgo).filter(r => r.tipo_rasgo === "Habilidad").map(r => r.titulo).join(", ")}</p>
                      <p>Debilidades: {villian.rasgosSuper.map(r => r.rasgo).filter(r => r.tipo_rasgo === "Debilidad").map(r => r.titulo).join(", ")}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

          <h1 className="text-3xl mt-10">Villano que ha perdido mas contra un héroe adolescente</h1>
          {console.log([villianAgainstTeen])}
          {console.log(villianAgainstTeen instanceof Object)}
          {villianAgainstTeen instanceof Object ? (
            [villianAgainstTeen].map((value) => {
              return (
                <Card key={cuid()}>
                  <h1 className="underline">Villian</h1>
                  <h1>Name: {value.villano.nombre}</h1>
                  <h1 className="underline mt-2">Heroe:</h1>
                  <h1>Name: {value.heroe.nombre}</h1>
                  <h1 className="underline mt-3">Peleas:</h1>
                  <h1>Peleas perdidas por villano: {value.peleas}</h1>
                </Card>
              );
            })

          ) : <h1>No records found.</h1>

          }

         
        </>
      )}
       </div>
    </section>
  );
}

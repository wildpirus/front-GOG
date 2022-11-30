import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdultsHeroes,
  fetchGetHeroes,
  fetchTeenHeroes,
  getHeroeByRelacionesPersonales,
  GetheroeByHabilidades,
  selectPersonalRelation,
  selectSkills,
  fetchTopThree,
  selectAdultHeroes,
  selectHeroes,
  selectTeenHeroes,
  selectTopThree,
  selectHeroesResult,
  fetchHeroeByName,
} from "../../store/features/heroesSlice";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";
import cuid from "cuid";
export function Heroes() {
  const dispatch = useDispatch();

  const heroes = useSelector(selectHeroes);
  const topThree = useSelector(selectTopThree);
  const teenHeroes = useSelector(selectTeenHeroes);
  const adultHeroes = useSelector(selectAdultHeroes);
  const results = useSelector(selectHeroesResult);
  const skills = useSelector(selectSkills);
  const personal = useSelector(selectPersonalRelation);

  const [typed, setTyped] = useState("");
  const [selected, setSelected] = useState("1");

  useEffect(() => {
    const getData = async () => {
      await Promise.all[
        (dispatch(fetchGetHeroes()),
        dispatch(fetchTopThree()),
        dispatch(fetchTeenHeroes()),
        dispatch(fetchAdultsHeroes()))
      ];
    };
    getData();
  }, []);

  useEffect(() => {
    const getHeroeByTyped = async () => {
      if (selected === "1") {
        await dispatch(fetchHeroeByName(typed));
      }
      if (selected === "2") {
        await dispatch(GetheroeByHabilidades(typed));
      }
      if (selected === "3") {
        await dispatch(getHeroeByRelacionesPersonales(typed));
      }
    };
    if (typed !== "") {
      getHeroeByTyped();
    }
  }, [typed]);

  const getOption = () => {
    if (selected === "1") {
      return results;
    }
    if (selected === "2") {
      return skills;
    }
    if (selected === "3") {
      return personal;
    }
  };

  return (
    <section className="h-screen">
      <Navbar />
      <div className="mr-10 my-2 flex items-center justify-end">
        <Link to="/heroe/create">
          <h1 className="cursor-pointer">Create heroe ✚</h1>
        </Link>
      </div>
      <div className="mt-3 flex items-center justify-center">
        <h1>Search your heroe by:</h1>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="rounded-md ml-2 outline-none text-black"
        >
          <option value="1">Name</option>
          <option value="2">Skill</option>
          <option value="3">Personal relations</option>
        </select>
        <input
          className="rounded-md ml-4 p-2 text-white outline-none text-black"
          placeholder="Enter the value"
          onChange={(e) => setTyped(e.target.value)}
        />
      </div>
      <div className="m-10">
        {typed !== "" ? (
          getOption().length > 0 ? (
            getOption().map((heroe) => (
              <Card key={cuid()}>
                <div class="flex flex-col">
                <div className="mb-3"> 
                    <img src={heroe.image_link} />
                  </div>
                  <a href={"heroe/" + heroe.super_id} target="_blank">
                    <h1>Name: {heroe.nombre}</h1>
                    <p>Origin: {heroe.origen}</p>
                    <p>Relation: {heroe.relaciones}</p>
                  </a>
                </div>
              </Card>
            ))
          ) : (
            <h1 className="text-3xl underline text-center">
              No records found ☹️
            </h1>
          )
        ) : (
          <>
            <h1 className="text-3xl mb-3">Heroes</h1>
            <div className="flex flex-wrap">
              {heroes.map((heroe) => (
                <Card key={cuid()}>
                  <div class="flex flex-col">
                  <div className="mb-3"> 
                      <img src={heroe.image_link} />
                    </div>
                    <a href={"heroe/" + heroe.super_id} target="_blank">
                      <h1>Name: {heroe.nombre}</h1>
                      <p>Origin: {heroe.origen}</p>
                      <p>Relation: {heroe.relaciones}</p>
                      <p>Edad: {heroe.edad}</p>
                      <p>Habilidades: {heroe.rasgosSuper.map(r => r.rasgo).filter(r => r.tipo_rasgo === "Habilidad").map(r => r.titulo).join(", ")}</p>
                      <p>Debilidades: {heroe.rasgosSuper.map(r => r.rasgo).filter(r => r.tipo_rasgo === "Debilidad").map(r => r.titulo).join(", ")}</p>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
            <br />

            <h1 className="text-3xl mb-3">Top 3:</h1>
            <div className="flex flex-wrap">
              {topThree.map((heroe) => (
                <Card key={cuid()}>
                  <div class="flex flex-col">
                  <div className="mb-3"> 
                      <img src={heroe.image_link} />
                    </div>
                    <a href={"heroe/" + heroe.super_id} target="_blank">
                      <h1>Name: {heroe.nombre}</h1>
                      <p>Origin: {heroe.origen}</p>
                      <p>Relation: {heroe.relaciones}</p>
                      <p>Edad: {heroe.edad}</p>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
            <br />

            <h1 className="text-3xl mb-3">Teen Heroes:</h1>
            <div className="flex flex-wrap">
              {teenHeroes.length > 0 ? (
                teenHeroes.map((heroe) => (
                  <Card key={cuid()}>
                    <div class="flex flex-col">
                    <div className="mb-3"> 
                        <img src={heroe.image_link} />
                      </div>
                      <a href={"heroe/" + heroe.super_id} target="_blank">
                        <h1>Name: {heroe.nombre}</h1>
                        <p>Origin: {heroe.origen}</p>
                        <p>Relation: {heroe.relaciones}</p>
                        <p>Edad: {heroe.edad}</p>
                      </a>
                    </div>
                  </Card>
                ))
              ) : (
                <h1 className="text-white">No records found.</h1>
              )}
            </div>
            <br />

            <h1 className="text-3xl mb-3">Adult Heroes:</h1>
            <div className="flex flex-wrap">
              {adultHeroes.length > 0 ? (
                adultHeroes.map((heroe) => (
                  <Card key={cuid()}>
                    <div class="flex flex-col">
                      <div className="mb-3"> 
                        <img src={heroe.image_link} />
                      </div>
                      <a href={"heroe/" + heroe.super_id} target="_blank">
                        <h1>Name: {heroe.nombre}</h1>
                        <p>Origin: {heroe.origen}</p>
                        <p>Relation: {heroe.relaciones}</p>
                        <p>Edad: {heroe.edad}</p>
                      </a>
                    </div>
                  </Card>
                ))
              ) : (
                <h1 className="text-white">No records found.</h1>
              )}
            </div>

            <div>
              <h1 className="text-3xl mb-3">Skills:</h1>
              <div></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
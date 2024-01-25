import { useState } from "react";
import { Cartilla } from "./Cartilla";

export default function Nominacion() {
  const [target, setTarget] = useState(1);
  const ChangeTarget = (e, x) => {
    e.preventDefault();
    setTarget(x);
  };
  return (
    <div className="grid grid-cols-2 mt-10 gap-10 w-full">
      <ul className="[&&>li]:text-xl">
        <li className="bg-[#000527] w-full">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-semibold">Categoría</span>
            <span className="m-2 font-semibold">Ganadores</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 1)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Streamer del año</span>
            <span className="m-2 font-light">Ibai</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 2)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Serie de contenido del año</span>
            <span className="m-2 font-light">Tortillaland</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 3)}
          className="list revelacion"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Streamer revelación del año</span>
            <span className="m-2 font-light">elXokas</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 4)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Evento del año</span>
            <span className="m-2 font-light">La velada del año</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 5)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Mejor trayectoria</span>
            <span className="m-2 font-light">Fernanfloo</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 6)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Talk show del año</span>
            <span className="m-2 font-light">The Wild Project</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 7)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light"> Canción del año</span>
            <span className="m-2 font-light">El cuarteto de Ibai</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 8)}
          className="list bg-[#000527] jagger"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Jägger del año</span>
            <span className="m-2 font-light">Jägger boxeador</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 9)}
          className="list steamer-IRL"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Streamer IRL del año</span>
            <span className="m-2 font-light">Kidi</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 10)}
          className="bg-[#000527] list caster"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Caster del año</span>
            <span className="m-2 font-light">Kaquka</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 11)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light"> Reportero/a de esports del año</span>
            <span className="m-2 font-light">Cristinini</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 12)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Jugador/a de esports del año</span>
            <span className="m-2 font-light">Mixwell</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 13)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Roleplayer del año</span>
            <span className="m-2 font-light">AgenteMaxo</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 14)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Baile del año</span>
            <span className="m-2 font-light">Papi Gavi</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 15)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Enfadado/a del año</span>
            <span className="m-2 font-light">Agustin51</span>
          </div>
        </li>
        <li onClick={(e, x) => ChangeTarget(e, 16)} className="bg-[#000527] list">
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Fail del año</span>
            <span className="m-2 font-light">Ibai</span>
          </div>
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 17)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Clip del año</span>
            <span className="m-2 font-light">El Kun</span>
          </div>
        </li>
      </ul>
      <div className="flex flex-wrap gap-10 justify-center items-end">
        <Cartilla objet={target}/>
      </div>
    </div>
  );
}

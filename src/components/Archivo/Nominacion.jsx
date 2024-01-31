import { useState } from "react";
import { Cartilla } from "./Cartilla";
import { CartillaPequeña } from "./CartillaPequeña";

export default function Nominacion() {
  const [target, setTarget] = useState(1);
  const ChangeTarget = (e, x) => {
    e.preventDefault();
    setTarget(x);
  };
  return (
    <div className="grid lg:grid-cols-2 mt-10 gap-10 w-full grid-cols-1">
      <ul className="md:[&&>li]:text-xl">
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
          {target == 1 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 2)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Serie de contenido del año</span>
            <span className="m-2 font-light">Tortillaland</span>
          </div>
          {target == 2 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 3)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Streamer revelación del año</span>
            <span className="m-2 font-light">elXokas</span>
          </div>
          {target == 3 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 4)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Evento del año</span>
            <span className="m-2 font-light">La velada del año</span>
          </div>
          {target == 4 ? <CartillaPequeña object={target} /> : ""}
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
          {target == 5 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 6)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Talk show del año</span>
            <span className="m-2 font-light">The Wild Project</span>
          </div>
          {target == 6 ? <CartillaPequeña object={target} /> : ""}
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
          {target == 7 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 8)}
          className="list bg-[#000527]"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Jägger del año</span>
            <span className="m-2 font-light">Jägger boxeador</span>
          </div>
          {target == 8 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 9)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Streamer IRL del año</span>
            <span className="m-2 font-light">Kidi</span>
          </div>
          {target == 9 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 10)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Caster del año</span>
            <span className="m-2 font-light">Kaquka</span>
          </div>
          {target == 10 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 11)}
          className="list"
          style={{
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)",
          }}
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">
              {" "}
              Reportero/a de esports del año
            </span>
            <span className="m-2 font-light">Cristinini</span>
          </div>
          {target == 11 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 12)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Jugador/a de esports del año</span>
            <span className="m-2 font-light">Mixwell</span>
          </div>
          {target == 12 ? <CartillaPequeña object={target} /> : ""}
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
          {target == 13 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 14)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Baile del año</span>
            <span className="m-2 font-light">Papi Gavi</span>
          </div>
          {target == 14 ? <CartillaPequeña object={target} /> : ""}
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
          {target == 15 ? <CartillaPequeña object={target} /> : ""}
        </li>
        <li
          onClick={(e, x) => ChangeTarget(e, 16)}
          className="bg-[#000527] list"
        >
          <div className="flex flex-grow justify-between w-full">
            <span className="m-2 font-light">Fail del año</span>
            <span className="m-2 font-light">Ibai</span>
          </div>
          {target == 16 ? <CartillaPequeña object={target} /> : ""}
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
          {target == 17 ? <CartillaPequeña object={target} /> : ""}
        </li>
      </ul>
      <Cartilla objet={target} />
    </div>
  );
}

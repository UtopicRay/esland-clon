import { UseChangeCard } from "../hook/useChangeCard";
export function CartillaPequeña({object}) {
    const  {element}= UseChangeCard(object);
    return (
    <div>
      <div
        id="cartilla-pequeña"
        className="bg-[#1682c7] flex w-full"
      >
        <img
          className="h-auto max-w-full bg-[#1682c7] mix-blend-luminosity"
          src={element.img1}
          alt={`foto-de-${element.name1}`}
        />
        <div className="bg-white flex justify-center items-center w-16 h-14 text-black  m-auto relative bottom-6 text-center">
          <p className={`puesto text-2xl font-bold`}>1ro</p>
        </div>
        <div className="px-5 pb-10 [&&>h5]:text-black [&&>h5]:font-semibold uppercase">
          <h6>{element.name1}</h6>
          <h5>
            comunidad:
            <span className="value" data-akhi={element.comunidad1}>
            {element.comunidad1}
            </span>
          </h5>
          <h5>
            streamers:<span className="value" data-akhi={element.streamer1}>{element.streamer1}</span>%
          </h5>
          <h3 className="uppercase text-xl font-bold">
            total:
            <span className="value uppercase" data-akhi={element.total1}>
            {element.total1}
            </span>
            %
          </h3>
        </div>
      </div>
      <div id="cartilla-pequeña2" className="bg-[#1682c7] animate-fade-left animate-duration-[900ms] animate-ease-linear">
        <img
          className="h-auto max-w-56 bg-[#1682c7] mix-blend-luminosity"
          src={element.img2}
          alt={`foto-de-${element.name2}`}
        />
        <div className="bg-white flex justify-center items-center w-16 h-14 text-black  m-auto relative bottom-6 text-center">
          <p className={`puesto text-2xl font-bold`}>2do</p>
        </div>
        <div className="px-5 pb-10 [&&>h5]:text-black [&&>h5]:font-semibold uppercase">
          <h6>{element.name2}</h6>
          <h5>
            comunidad:
            <span className="value" data-akhi={element.comunidad2}>
            {element.comunidad2}
            </span>
          </h5>
          <h5>
            streamers:<span className="value" data-akhi={element.streamer2}>{element.streamer2}</span>%
          </h5>
          <h3 className="uppercase text-xl font-bold">
            total:
            <span className="value uppercase" data-akhi={element.total2}>
            {element.total2}
            </span>
            %
          </h3>
        </div>
      </div>
    </div>
  );
}

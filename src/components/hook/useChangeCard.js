import { useEffect, useState } from "react";

export function UseChangeCard(objet) {
  function card(
    name1,
    comunidad1,
    streamer1,
    total1,
    name2,
    comunidad2,
    streamer2,
    total2,
    img1,
    img2
  ) {
    (this.name1 = name1),
      (this.comunidad1 = comunidad1),
      (this.streamer1 = streamer1),
      (this.total1 = total1),
      (this.name2 = name2),
      (this.comunidad2 = comunidad2),
      (this.streamer2 = streamer2),
      (this.total2 = total2),
      (this.img1 = img1),
      (this.img2=img2);
  }

  const streams = new card(
    "ibai",
    "41.05",
    "75.6",
    "58.33",
    "auronplay",
    "32.85",
    "8.1",
    "20.48",
    "../../../public/img/palmares/ibai.webp",
    "../../../public/img/palmares/auronplay.webp"
  );

  const serie = new card(
    "tortillaland",
    "39.92",
    "27.7",
    "33.81",
    "egoland",
    "26.09",
    "40.6",
    " 33.35",
    "../../../public/img/palmares/serie1.webp",
    "../../../public/img/palmares/serie2.webp"
  );
  const revelacion = new card(
    "elxokas",
    "27.74",
    "54",
    "40.87",
    "elMariana",
    "30.38",
    "27",
    "28.69",
    "../../../public/img/palmares/revelacion1.webp",
    "../../../public/img/palmares/revelacion2.webp"
  );
  const evento = new card(
    "la velada del año",
    "48.78",
    "72.9",
    "60.84",
    "mundial de globos",
    "27.27",
    "18.9",
    "23.1",
    "../../../public/img/palmares/evento1.webp",
    "../../../public/img/palmares/evento2.webp"
  );
  const trayectoria = new card(
    "Fernanfloo",
    "60.25",
    "18.9",
    "39.58",
    "Knekro",
    "19.68",
    "37.8",
    "28.74",
    "../../../public/img/palmares/trayectoria1.webp",
    "../../../public/img/palmares/trayectoria2.webp"
  );

  const talkShow = new card(
    "The Wild Project",
    "43.81",
    "45.9",
    "44.86",
    "YoInterneto",
    "16.05",
    "21.6",
    "18.83",
    "../../../public/img/palmares/talkshow1.webp",
    "../../../public/img/palmares/talkshow2.webp"
  );
  const cancion = new card(
    "El cuarteto de Ibai",
    "54.6",
    "40.5",
    "47.55",
    "Tofu Delivery",
    "10.41",
    "29.7",
    "20.1",
    "../../../public/img/palmares/cancion1.webp",
    "../../../public/img/palmares/cancion2.webp"
  );
  const jagger = new card(
    "Jägger boxeador",
    "36.09",
    "51.3",
    "43.7",
    "Profesor Jägger",
    "34.19",
    "24.3",
    "29.25",
    "../../../public/img/palmares/jagger1.webp",
    "../../../public/img/palmares/jagger2.webp"
  );

  const streamIRL = new card(
    "Kidi",
    "20.81",
    "67.5",
    "44.15",
    "Momo",
    "51.39",
    "16.2",
    "33.79",
    "../../../public/img/palmares/irl1.webp",
    "../../../public/img/palmares/irl2.webp"
  );
  const caster = new card(
    "Kaquka",
    "40.48",
    "27",
    "33.74",
    "Champi",
    "24.41",
    "29.7",
    "27.1",
    "../../../public/img/palmares/caster1.webp",
    "../../../public/img/palmares/caster2.webp"
  );
  const reportero = new card(
    "Cristinini",
    "66.01",
    "35.1",
    "50.56",
    "Yuste",
    "18.79",
    "43.2",
    "31",
    "../../../public/img/palmares/reportero1.webp",
    "../../../public/img/palmares/reportero2.webp"
  );
  const jugador = new card(
    "Mixwell",
    "32.92",
    "37.8",
    "35.36",
    "Elyoya",
    "26.82",
    "37.8",
    "32.31",
    "../../../public/img/palmares/jugador1.webp",
    "../../../public/img/palmares/jugador2.webp"
  );
  const rolPlayer = new card(
    "AgenteMaxo",
    "23.14",
    "40.5",
    "31.82",
    "Cristinini",
    "28.52",
    "29.7",
    "29.11",
    "../../../public/img/palmares/roleplayer1.webp",
    "../../../public/img/palmares/roleplayer.webp"
  );
  const baile = new card(
    "papi Gavi",
    "45.96",
    "35.1",
    "40.53",
    "Ibai Llanos",
    "25.14",
    "54",
    "39.57",
    "../../../public/img/palmares/baile1.webp",
    "../../../public/img/palmares/baile2.webp"
  );
  const enfadada = new card(
    "Agustin51",
    "34.16",
    "51.3",
    "42.73",
    "ElXocas",
    "23.06",
    "18.9",
    "20.98",
    "../../../public/img/palmares/enfadado1.webp",
    "../../../public/img/palmares/enfadado2.webp"
  );
  const fail = new card(
    "Ibai",
    "47.59",
    "27",
    "37.29",
    "Ampeter",
    "27.73",
    "43.2",
    "35.46",
    "../../../public/img/palmares/fail1.webp",
    "../../../public/img/palmares/fail2.webp"
  );
  const clip = new card(
    "El Kun",
    "42.61",
    "32.4",
    "37.51",
    "Esto no es un juego",
    "21.86",
    "51.3",
    "36.58",
    "../../../public/img/palmares/clip1.webp",
    "../../../public/img/palmares/clip2.webp"
  );

  const [element, setElement] = useState(streams);
  useEffect(() => {
    changeCard();
  }, [objet]);

  function changeCard() {
    switch (objet) {
      case 1: {
        setElement[streams];
        setElement({
          ...element,
          name1: streams.name1,
          comunidad1: streams.comunidad1,
          streamer1: streams.streamer1,
          total1: streams.total1,
          name2: streams.name2,
          comunidad2: streams.comunidad2,
          streamer2: streams.streamer2,
          total2: streams.total2,
          img1: streams.img1,
          img2: streams.img2
        });
        break;
      }
      case 2: {
        setElement({
          ...element,
          name1: serie.name1,
          comunidad1: serie.comunidad1,
          streamer1: serie.streamer1,
          total1: serie.total1,
          name2: serie.name2,
          comunidad2: serie.comunidad2,
          streamer2: serie.streamer2,
          total2: serie.total2,
          img1: serie.img1,
          img2: serie.img2
        });
        break;
      }
      case 3: {
        setElement({
          ...element,
          name1: revelacion.name1,
          comunidad1: revelacion.comunidad1,
          streamer1: revelacion.streamer1,
          total1: revelacion.total1,
          name2: revelacion.name2,
          comunidad2: revelacion.comunidad2,
          streamer2: revelacion.streamer2,
          total2: revelacion.total2,
          img1: revelacion.img1,
          img2: revelacion.img2
        });
        break;
      }
      case 4: {
        setElement({
          ...element,
          name1: evento.name1,
          comunidad1: evento.comunidad1,
          streamer1: evento.streamer1,
          total1: evento.total1,
          name2: evento.name2,
          comunidad2: evento.comunidad2,
          streamer2: evento.streamer2,
          total2: evento.total2,
          img1: evento.img1,
          img2: evento.img2
        });
        break;
      }
      case 5: {
        setElement({
          ...element,
          name1: trayectoria.name1,
          comunidad1: trayectoria.comunidad1,
          streamer1: trayectoria.streamer1,
          total1: trayectoria.total1,
          name2: trayectoria.name2,
          comunidad2: trayectoria.comunidad2,
          streamer2: trayectoria.streamer2,
          total2: trayectoria.total2,
          img1: trayectoria.img1,
          img2: trayectoria.img2
        });
        break;
      }
      case 6: {
        setElement({
          ...element,
          name1: talkShow.name1,
          comunidad1: talkShow.comunidad1,
          streamer1: talkShow.streamer1,
          total1: talkShow.total1,
          name2: talkShow.name2,
          comunidad2: talkShow.comunidad2,
          streamer2: talkShow.streamer2,
          total2: talkShow.total2,
          img1: talkShow.img1,
          img2: talkShow.img2
        });
        break;
      }
      case 7: {
        setElement({
          ...element,
          name1: cancion.name1,
          comunidad1: cancion.comunidad1,
          streamer1: cancion.streamer1,
          total1: cancion.total1,
          name2: cancion.name2,
          comunidad2: cancion.comunidad2,
          streamer2: cancion.streamer2,
          total2: cancion.total2,
          img1: cancion.img1,
          img2: cancion.img2
        });
        break;
      }
      case 8: {
        setElement({
          ...element,
          name1: jagger.name1,
          comunidad1: jagger.comunidad1,
          streamer1: jagger.streamer1,
          total1: jagger.total1,
          name2: jagger.name2,
          comunidad2: jagger.comunidad2,
          streamer2: jagger.streamer2,
          total2: jagger.total2,
          img1: jagger.img1,
          img2: jagger.img2
        });
        break;
      }
      case 9: {
        setElement({
          ...element,
          name1: streamIRL.name1,
          comunidad1: streamIRL.comunidad1,
          streamer1: streamIRL.streamer1,
          total1: streamIRL.total1,
          name2: streamIRL.name2,
          comunidad2: streamIRL.comunidad2,
          streamer2: streamIRL.streamer2,
          total2: streamIRL.total2,
          img1: streamIRL.img1,
          img2: streamIRL.img2,
        });
        break;
      }
      case 10: {
        setElement({
          ...element,
          name1: caster.name1,
          comunidad1: caster.comunidad1,
          streamer1: caster.streamer1,
          total1: caster.total1,
          name2: caster.name2,
          comunidad2: caster.comunidad2,
          streamer2: caster.streamer2,
          total2: caster.total2,
          img1: caster.img1,
          img2: caster.img2
        });
        break;
      }
      case 11: {
        setElement({
          ...element,
          name1: reportero.name1,
          comunidad1: reportero.comunidad1,
          streamer1: reportero.streamer1,
          total1: reportero.total1,
          name2: reportero.name2,
          comunidad2: reportero.comunidad2,
          streamer2: reportero.streamer2,
          total2: reportero.total2,
          img1: reportero.img1,
          img2: reportero.img2
        });
        break;
      }
      case 12: {
        setElement({
          ...element,
          name1: jugador.name1,
          comunidad1: jugador.comunidad1,
          streamer1: jugador.streamer1,
          total1: jugador.total1,
          name2: jugador.name2,
          comunidad2: jugador.comunidad2,
          streamer2: jugador.streamer2,
          total2: jugador.total2,
          img1: jugador.img1,
          img2: jugador.img2
        });
        break;
      }
      case 13: {
        setElement({
          ...element,
          name1: rolPlayer.name1,
          comunidad1: rolPlayer.comunidad1,
          streamer1: rolPlayer.streamer1,
          total1: rolPlayer.total1,
          name2: rolPlayer.name2,
          comunidad2: rolPlayer.comunidad2,
          streamer2: rolPlayer.streamer2,
          total2: rolPlayer.total2,
          img1: rolPlayer.img1,
          img2: rolPlayer.img2
        });
        break;
      }
      case 14: {
        setElement({
          ...element,
          name1: baile.name1,
          comunidad1: baile.comunidad1,
          streamer1: baile.streamer1,
          total1: baile.total1,
          name2: baile.name2,
          comunidad2: baile.comunidad2,
          streamer2: baile.streamer2,
          total2: baile.total2,
          img1: baile.img1,
          img2: baile.img2,
        });
        break;
      }
      case 15: {
        setElement({
          ...element,
          name1: enfadada.name1,
          comunidad1: enfadada.comunidad1,
          streamer1: enfadada.streamer1,
          total1: enfadada.total1,
          name2: enfadada.name2,
          comunidad2: enfadada.comunidad2,
          streamer2: enfadada.streamer2,
          total2: enfadada.total2,
          img1: enfadada.img1,
          img2: enfadada.img2

        });
        break;
      }
      case 16: {
        setElement({
          ...element,
          name1: fail.name1,
          comunidad1: fail.comunidad1,
          streamer1: fail.streamer1,
          total1: fail.total1,
          name2: fail.name2,
          comunidad2: fail.comunidad2,
          streamer2: fail.streamer2,
          total2: fail.total2,
          img1: fail.img1,
          img2: fail.img2
        });
        break;
      }
      case 17: {
        setElement({
          ...element,
          name1: clip.name1,
          comunidad1: clip.comunidad1,
          streamer1: clip.streamer1,
          total1: clip.total1,
          name2: clip.name2,
          comunidad2: clip.comunidad2,
          streamer2: clip.streamer2,
          total2: clip.total2,
          img1: clip.img1,
          img2: clip.img2
        });
        break;
      }
    }
  }
  return { element };
}

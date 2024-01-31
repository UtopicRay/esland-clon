import { useEffect, useState } from "react";
import  Informacion from '../hook/informacion.json'
export function UseChangeCard(objet) {
  const info=Informacion
  const [element, setElement] = useState(info[0]);
  useEffect(() => {
    changeCard(objet-1);
  }, [objet]);

  function changeCard(x) {
  setElement(info[x])
  }
  return { element };
}

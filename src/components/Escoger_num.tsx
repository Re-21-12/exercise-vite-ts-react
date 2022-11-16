import React, { FunctionComponent } from "react";

const posibles_nums = ["I", "II", "III", "IV", "V"];

interface Props{
 Escoger_num_seleccionado: string; 
 onEscoger_num_seleecionado: (num:string) => void;
}

//usamos el .map para iterar nuestra lista,
export const Escoger_num:FunctionComponent<Props> = ({onEscoger_num_seleecionado,Escoger_num_seleccionado}) => {
    {
        /** cuando se usa rfc se cambia el function por el const para volverlo una funcion flecha anonima
         * FC es functional component
         */
      }
  return (
    <div style={{ display: "flex" }}>
      {posibles_nums.map(num => (
        <button key={num} className={Escoger_num_seleccionado === num ? 'active' : '' } 
        onClick={()=> onEscoger_num_seleecionado(num)}>{num}</button>
      ))}
    </div>
  );
};

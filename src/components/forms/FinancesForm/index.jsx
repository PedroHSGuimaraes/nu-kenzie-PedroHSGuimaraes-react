import React, { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Selection";

import styles from "./style.module.scss";

export const FinancesForm = ({ addFinances }) => {
  const [description, setDescription] = useState("");
  const [valueMoney, setValueMoney] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addFinances({ description, valueMoney, typeValue });

    setDescription("");
    setValueMoney("");
    setTypeValue("");
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={submit}>
        <Input
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={description}
          setValue={setDescription}
        />
        <>
          <p className="headline headline__body">Ex: Compra de roupas</p>
        </>

        <Input
          label="Valor (R$)"
          placeholder="Digite aqui o valor"
          type="number"
          value={valueMoney}
          setValue={setValueMoney}
        />

        <Select
          label="Tipo de valor"
          value={typeValue}
          setValue={setTypeValue}
        />
        <button className="btn btn__insertValue  btn__full " type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};

import { Option } from "./Option";

import style from "./style.module.scss";

export const Select = ({ label, id, value, setValue }) => {
  return (
    <div className={style.selectAreaBox}>
      <label htmlFor={id}>{label}</label>
      <select
        required
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Option value="" Text="Selecione uma opção" />
        <Option value="Entrada" Text="Entrada" />
        <Option value="Despesa" Text="Despesa" />
      </select>
    </div>
  );
};

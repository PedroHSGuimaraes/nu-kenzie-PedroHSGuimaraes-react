import styles from "./style.module.scss";

export const FinancesCard = ({
  description,
  valueMoney,
  typeValue,
  removeFinance,
  id,
}) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  valueMoney = formatter.format(valueMoney);

  return (
    <li
      className={`${styles.card}  ${
        typeValue === "Entrada" ? styles.card__green : styles.card__red
      } `}
    >
      {" "}
      <div className={styles.card__contains}>
        <h2>{description}</h2>

        <p>{typeValue}</p>
      </div>
      <div className={styles.card__contains__two}>
        <h3>{valueMoney} </h3>
        <button
          className="btn btn__deleteValue"
          onClick={() => {
            removeFinance(id);
          }}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};

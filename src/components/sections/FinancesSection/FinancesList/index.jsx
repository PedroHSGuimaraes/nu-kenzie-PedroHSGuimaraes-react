import { FinancesCard } from "./FinancesCard";
import styles from "./style.module.scss";
export const FinancesList = ({ financesList, removeFinance }) => {
  const totalFinances = financesList.reduce((acc, finance) => {
    const financeValue = parseFloat(finance.valueMoney);

    if (finance.typeValue === "Entrada") {
      return acc + financeValue;
    } else if (finance.typeValue === "Despesa") {
      return acc - financeValue;
    } else {
      return acc;
    }
  }, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const totalFormatted = formatter.format(totalFinances);
  return (
    <div>
      <div>
        <div className={styles.boxFinancesList}>
          <div className={styles.boxFinancesList__valoue}>
            <h4 className="title title__two">Valor total:</h4>
            <span className="title title__four">{totalFormatted}</span>
          </div>
          <p className="headline">O valor se refere ao saldo</p>
        </div>
      </div>

      <h1 className="title title__three">Resumo financeiro</h1>
      {financesList.length > 0 ? (
        <ul>
          {financesList.map((finance) => (
            <FinancesCard
              key={finance.id}
              id={finance.id}
              description={finance.description}
              valueMoney={finance.valueMoney}
              typeValue={finance.typeValue}
              removeFinance={removeFinance}
            />
          ))}
        </ul>
      ) : (
        <p className="title title__one">
          Você ainda não possui nenhum lançamento
        </p>
      )}
    </div>
  );
};

import { useState } from "react";
import { FinancesForm } from "../../forms/FinancesForm";
import { FinancesList } from "./FinancesList";
import styles from "./style.module.scss";
export const FinancesSection = () => {
  const [financesList, setFinanceList] = useState([]);

  const addFinances = (formData) => {
    const newFinances = { ...formData, id: crypto.randomUUID() };
    setFinanceList([...financesList, newFinances]);
  };

  const removeFinance = (removeId) => {
    const newFinances = financesList.filter(
      (finance) => finance.id !== removeId
    );
    setFinanceList(newFinances);
  };

  return (
    <section>
      <div className="container">
        <div className={styles.boxFinancesSection}>
          <FinancesForm addFinances={addFinances} />
          <FinancesList
            financesList={financesList}
            removeFinance={removeFinance}
          />
        </div>
      </div>
    </section>
  );
};

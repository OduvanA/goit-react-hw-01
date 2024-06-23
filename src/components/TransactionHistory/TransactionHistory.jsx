import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
  <thead className={css.tHeader}>
    <tr className={css.tHeaderRow}>
      <th className={css.tHeaderData}>Type</th>
      <th className={css.tHeaderData}>Amount</th>
      <th className={css.tHeaderData}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (
      <tr className={css.tBodyRow} key={item.id}>
        <td className={css.tBodyData}>{item.type}</td>
        <td className={css.tBodyData}>{item.amount}</td>
        <td className={css.tBodyData}>{item.currency}</td>
    </tr>)
    )}

  </tbody>
</table>

  )
}
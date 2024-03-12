export default function Purchase(props) {

   if (!props.stocks) return (<p>Search returned no results</p>)
   return (
      <>
<table>
  <thead>
    <tr>
      <th>Ticker</th>
      <th>Company Name</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.stocks.map(stock => (
      <tr key={stock._id}>
        <td>{stock.ticker}</td>
        <td>{stock.company_name}</td>
        <td>
          <input type="number" min="0" />
        </td>
        <td>
          <button>Buy</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </>
   )
}
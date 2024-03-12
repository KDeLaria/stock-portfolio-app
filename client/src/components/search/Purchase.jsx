export default function Purchase(props) {


// Need to put the onClick logic here
// When "Buy" button is clicked this happens:
// 1. Use fetch to PUT an entry on to User collection
//    Have created new route /api/userStock/:id
// 2. Use setPortfolio to update portfolio state so that ListPortfolio can list the new stock




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
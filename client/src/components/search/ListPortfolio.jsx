export default function ListPortfolio(props) {

   if (!props.portfolio.length) return (<p>Nothing in your portfolio yet!</p>)
   return (
      <>
         <table className="table">
            <thead>
               <tr>
                  <th>Company</th>
                  <th>Shares Owned</th>
               </tr>
            </thead>

            <tbody>
               {props.portfolio.map((stocks) => (
                  <tr key={stocks.ticker}>
                     <td>
                        {stocks.ticker}
                     </td>
                     <td>
                        {sticker.shares_owned}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}
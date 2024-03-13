
// Need to put the onClick logic here
// When "Buy" button is clicked this happens:
// 1. Use fetch to PUT an entry on to User collection
//    Have created new route /api/userStock/:id
// 2. Use setPortfolio to update portfolio state so that ListPortfolio can list the new stock

export default function Purchase(props) {
   // Function to handle the purchase
   const handlePurchase = async (stockId, quantity) => {
      if (quantity <= 0) {
         console.log("Please enter a valid quantity.");
         return;
      }
      try {
         // Assuming you have the user's ID stored in a state or context
         const userId = props.user_id; // Replace this with actual user ID retrieval logic
         const response = await fetch(`/api/userStock/${userId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               ticker: stockId,
               shares_owned: parseInt(quantity),
            })
         });
          const data = await response.json();
         if (data.status === "Success") {
            // Update the portfolio state if needed or show a success message
            console.log("Purchase successful!");
            props.getPortfolio()
         } else {
            // Handle any errors or unsuccessful purchase attempts
            console.log("Purchase failed: " + data.message);
         }
      } catch (error) {
         console.log("An error occurred while making the purchase.");
      }
   };

   if (!props.stocks) return (<p>Search returned no results</p>);
   return (
      <>
         <table>
            <thead>
               <tr>
                  <th className="pr-4">Ticker</th>
                  <th className="pr-4">Company Name</th>
                  <th className="pr-4">Quantity</th>
                  <th className="pr-4"></th>
               </tr>
            </thead>
            <tbody>
               {props.stocks.map(stock => (
                  <tr  key={stock._id}>
                     <td>{stock.ticker}</td>
                     <td>{stock.company_name}</td>
                     <td>
                        <input className="border border-gray-600" type="number" min="0" id={`quantity-${stock._id}`} />
                     </td>
                     <td>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full h-6 w-12" onClick={() => handlePurchase(stock.ticker, document.getElementById(`quantity-${stock._id}`).value)}>Buy</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}
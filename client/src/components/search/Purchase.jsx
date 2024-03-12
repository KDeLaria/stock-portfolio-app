
// Need to put the onClick logic here
// When "Buy" button is clicked this happens:
// 1. Use fetch to PUT an entry on to User collection
//    Have created new route /api/userStock/:id
// 2. Use setPortfolio to update portfolio state so that ListPortfolio can list the new stock

export default function Purchase(props) {
   // Function to handle the purchase
   const handlePurchase = async (stockId, quantity) => {
      if (quantity <= 0) {
         alert("Please enter a valid quantity.");
         return;
      }
      try {
         // Assuming you have the user's ID stored in a state or context
         const userId = props.user_id; // Replace this with actual user ID retrieval logic
         console.log("userId is " + userId)
         const response = await fetch(`/api/userStock/${userId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               stockId: stockId,
               quantity: quantity,
            })
         });
         console.log("Attempted fetch PUT in purchase.jsx")
         const data = await response.json();
         if (data.status === "success") {
            // Update the portfolio state if needed or show a success message
            alert("Purchase successful!");
         } else {
            // Handle any errors or unsuccessful purchase attempts
            alert("Purchase failed: " + data.message);
         }
      } catch (error) {
         console.error("Purchase error:", error);
         alert("An error occurred while making the purchase.");
      }
   };

   if (!props.stocks) return (<p>Search returned no results</p>);
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
                        <input type="number" min="0" id={`quantity-${stock._id}`} />
                     </td>
                     <td>
                        <button onClick={() => handlePurchase(stock.ticker, document.getElementById(`quantity-${stock._id}`).value)}>Buy</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}
export default function ListPortfolio(props) {

   const handleSell = async (ticker) => {
      try {
         // Assuming you have the user's ID stored in a state or context
         const userId = props.user_id; // Replace this with actual user ID retrieval logic
         console.log("userId is " + userId)
         console.log("ticker is " + ticker)
         const response = await fetch(`/api/userStock/${userId}/portfolio/${ticker}`, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            }
         });
         const data = await response.json();
         
         if (data.status === "Success") {
            // Update the portfolio state if needed or show a success message
            console.log("Sell successful!");
            props.getPortfolio()
         } else {
            // Handle any errors or unsuccessful purchase attempts
            console.log("Sell failed: " + data.message);
         }
      } catch (error) {
         console.log("An error occurred while trying to sell." + error.message);
      }
   };




   if (!props.portfolio.length) return (<p>Nothing in your portfolio yet!</p>)
   return (
      <>
         <table className="table">
            <thead>
               <tr>
                  <th className="pr-4">Company</th>
                  <th className="pr-4">Shares Owned</th>
                  <th className="pr-4"></th>
               </tr>
            </thead>

            <tbody>
               {props.portfolio.map((stock) => (
                  <tr key={stock._id}>
                     <td>
                        {stock.ticker}
                     </td>
                     <td>
                        {stock.shares_owned}
                     </td>
                     <td>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full h-6 w-12" onClick={() => handleSell(stock.ticker)}>Sell</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}
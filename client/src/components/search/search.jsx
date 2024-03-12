// import React from "react";
import React, { useState, useEffect } from "react";

export default function Search(props) {

   const [search, setSearch] = useState('');

   //  This is called when the form is submitted
   async function handleSearch(e) {
      e.preventDefault();
      try {
         // Make the search term all lowercase
         let lowerSearch = search.toLowerCase()
         console.log("Querying " + `/api/stock/${lowerSearch}`)
         const query = await fetch(`/api/stock/${lowerSearch}`)
         console.log(" query is " + query)
         const result = await query.json()
         console.log("result is " + JSON.stringify(result.payload));
         // let foundStocks = JSON.stringify(result.payload)
         // let foundStocks = result.payload

         if (result.status === "Success") {
            // console.log("foundStocks is " + foundStocks)
            props.setStocks(result.payload)
         }
      } catch (err) {
         console.log("Error message " + err.message)
      }
   };

   useEffect(() => {
      console.log("component: stocks is " + JSON.stringify(props.stocks));
   }, [props.stocks])



   return (
      <>
         <form onSubmit={handleSearch}>
            <div className="mt-4">
               <label htmlFor="findStocks" className="block">Search for stock by name or ticker</label>
               <input
                  type="text"
                  placeholder="Company Name"
                  id="search"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>

         </form>
      </>
   );

}


// export default SearchPage;

import React from "react";

function SearchPage() {

   const [search, setSearch] = useState('');

   async function handleSearch(e) {
      e.preventDefault();
      try {
         const query = await fetch("/api/stocks")
         const foundStocks = await query.json()
         if (result.status === "success") {
            setStocks(foundStocks.payload)
         }
      } catch (err) {
         console.log(err.message)
      }
      //  login logic,
      console.log(search);
   };
   return (
      <>
         <form onSubmit={handleSearch}>
            <div className="mt-4">
               <label htmlFor="findStocks" className="block">Search for stock by name or ticker</label>
               <input
                  type="search"
                  placeholder="Search"
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


export default Search;

import React from "react";

function SearchPage() {

   const [search, setSearch] = useState('');

   const handleSearch = (e) => {
      e.preventDefault();
      //  login logic,
      console.log(search);
   };


   const Search = () => {
      return (
         <>
            <form onSubmit={handleSearch}>
               <div className="mt-4">
                  <label htmlFor="search" className="block">Search for stock by name or ticker</label>
                  <input
                     type="search"
                     placeholder="Search"
                     id="search"
                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
               </div>
            </form>
         </>
      );
   };
}

export default Search;

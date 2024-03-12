// import React from 'react';
import React, { useState, useEffect } from "react";
import Search from '../components/search/search';
import ListPortfolio from '../components/search/ListPortfolio';
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import Purchase from '../components/search/Purchase'
import { useAuth } from "../../src/utils/Auth";


const SearchStocks = () => {

   const { user_id } = useAuth();

   // This is for what stocks the user owns.  Displays on right side of screen.
   const [portfolio, setPortfolio] = useState([]);
   // This is for what stocks are found by the search
   const [stocks, setStocks] = useState([]);

   // Get a list of all of the stocks that the user owns
   async function getPortfolio() {
      try {
         // If not logged in, this is going to return ALL data from user collection
         const query = await fetch(`/api/user/${user_id}`)
         // This will return all fields, but we want just ticker and shares_owned
         const result = await query.json()
         if (result.status === "success") {
            // Keep just the ticker and shares_owned attributes
            setPortfolio(result.payload.portfolio)
         }
      } catch (err) {
         console.log(err.message)
      }
   }

   // // Whenever the page is rendered, show all the stocks in their portfolio
   useEffect(() => {
      getPortfolio()
   }, [stocks])

   return (
      <>
         <div className="container">
            <Header />
            <Search stocks={stocks} setStocks={setStocks} />

            <div className="container">
               <div className="row ">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <Purchase stocks={stocks} user_id={user_id} getPortfolio={getPortfolio} />
                     </div>
                     <div>
                        <ListPortfolio portfolio={portfolio} />
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div className="row">
            <Footer />
         </div>
      </>
   )
};

export default SearchStocks;
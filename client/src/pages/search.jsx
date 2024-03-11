// import React from 'react';
import React, { useState, useEffect } from "react";
import Search from '../components/search/search';
// import ListPortfolio from '../components/search/ListPortfolio';
import Header from '../components/home/header'
import Footer from '../components/home/footer'

const SearchStocks = () => {

   // This is for what stocks the user owns.  Displays on right side of screen.
   const [portfolio, setPortfolio] = useState([]);
   // This is for what stocks are found by the search
   const [stocks, setStocks] = useState([]);

   // Get a list of all of the stocks that the user owns
   async function getPortfolio() {
      try {
         // Do a getUser from the user table to see what they own
         const query = await fetch("/api/user/:id")
         // This will return all fields, but we want just ticker and shares_owned
         const result = await query.json()
         if (result.status === "success") {
            // Keep just the ticker and shares_owned attributes
            
            setPortfolio(result.payload)
         }
      } catch (err) {
         console.log(err.message)
      }
   }

   // // Whenever the page is rendered, show all the stocks has in their portfolio
   // useEffect(() => {
   //    getPortfolio()
   // }, [])

   return (
      <>
         <div className="container">
            <Header />
            <Search />
            <Footer />
         </div>

{/* 
         <div className="container">
            <div className="row">
               <div className="col-6">
                  {isLoggedIn === true ? (
                     <AddNote getNotes={getNotes} />
                  ) : (
                     <p>You must be logged in to add notes!</p>
                  )}
               </div>

               <div className="col-6">
                  {isLoggedIn === true ? (
                     <ListPortfolio portfolio={portfolio} />
                  ) : (
                     <p>You must be logged in to view notes!</p>
                  )}
               </div>
            </div>
         </div> */}




      </>
   )
};

export default SearchStocks;
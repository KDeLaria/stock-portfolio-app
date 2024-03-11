export default function ListPortfolio(props){

   if( !props.portfolio.length ) return ( <p>Nothing in your portfolio yet!</p>)
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
           { props.portfolio.map( (note) => (
             <tr key={note.title}>
               <td>
                 <span>
                   <a href={`/note/${note?._id}`}>
                     { note.title }
                   </a>
                 </span>
               </td>
               <td>{ note.body }</td>
               <td>
                 <span>
                   { getPriorityValue(note.priority) }
                 </span>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </>
   )
 }
import React from 'react';

export default function Loading ({setLoading}){
 return(
     <div>
         <div>
             <img src='https://gifer.com/es/Y7pY' alt=''/>
         </div>
         <div>
             {
                 setTimeout(() =>{
                     setLoading(false)
                 }, 5000)
             }
         </div>
     </div>
 )
}
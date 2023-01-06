import React from "react";

export default function Pokemon({pokemon}){
    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
           <h1 style={{fontSize:'20px'}}>Name: {pokemon.Name}</h1>
           <img src={pokemon.Image} style={{height:'150px', width:'150px'}} />
           <h1 style={{fontSize:'20px'}}>Category: {pokemon.Category}</h1>
           <p className="m-2 p-2">Description: {pokemon.Description}</p>
           </div>
    )
}
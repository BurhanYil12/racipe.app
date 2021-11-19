import React from "react";
 import {motion} from "framer-motion";


const Recipes=( {title,image,ingredients})=>{
    return(
        <motion.div
        initial="hidden" animate="visible" variants={{
          hidden:{
            scale:.8,
            opacity:0
    
          },
          visible:{
            scale:1,
            opacity:1,
            transition:{
              delay:.4
    
            }
          },
        }}
      >
        
        
        <div className="food">
        <div className="food-info">
        <h3>{title}</h3>
        
        </div>
      <hr />
        <img src={image} alt="" />

        
        <div className="overview">
        {ingredients.map(ingredient=>(

     <div >
                 {ingredient.text}
            </div>

))}

        </div>
        </div>



        </motion.div> 
        
    )
}


export default Recipes; 




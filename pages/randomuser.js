
import Head from "next/head";
import logo from "../pictures/logo1.png"
import Image from 'next/image'
import {motion} from "framer-motion";
import Recipe from "./recipelook"
import React, {useEffect, useState } from 'react';




export default function Avatars({avatars}){

  const  [ recipes, setRecipes]=useState([]);
  const [search , setSearch]=useState("");
  const [query,setQuery]= useState("chicken")


  useEffect(()=>{
    getRecipe();
    console.log(query);
},[query])

const getRecipe=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=e315f76c&app_key=20dd5c22b46f642b4504658d93fc9a40`);
  const data = await response.json();
  console.log(data);
  setRecipes(data.hits);
  console.log(data.hits);
}


const updateSearch= e =>{
  setSearch(e.target.value);
 

}
const getSearch= e =>{
  e.preventDefault();
  setQuery(search);
  console.log(search);
}

const getSearch1= e =>{
  e.preventDefault();
  setQuery("main course");
  console.log(search);
}
const getSearch2= e =>{
  e.preventDefault();
  setQuery("desert");
  console.log(search);
}
const getSearch3= e =>{
  e.preventDefault();
  setQuery("salat");
  console.log(search);
}
const getSearch4= e =>{
  e.preventDefault();
  setQuery("startes");
  console.log(search);
}
const getSearch5= e =>{
  e.preventDefault();
  setQuery("entree starter");
  console.log(search);
}
const getSearch6= e =>{
  e.preventDefault();
  setQuery("drink");
  console.log(search);
}

  return(
   
    
    
      <div>
       <Head>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
           <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          
       
       </Head>
      
      <div class="jumbotronn layout">
      
      <div  className="logo">
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
     
      <Image className="img-fluid img-border"  src={logo}  width={300}
                        height={150} />
             </motion.div>           
        </div>
        
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
              <div className="bas">

                      <ul>
                      <li><a href="./randomuser">Ana Sayfa</a></li>
                      <li><a href="#">Hakkımızda</a></li>
                      <li><a href="#">İletişim</a></li>
                      
                      </ul>
                        
                        
                </div>

                </motion.div>              

    </div>
    {avatars.results.map(
              avatar=>{
                  return(
                    
                    


                     <div class="card-container">
	
	<img class="round" src={avatar.picture.large} alt="user" />
	<h3>{avatar.name.first} {avatar.name.last}</h3>
	<h6>{avatar.location.city}</h6>
	<p>{avatar.email}</p>	
</div>
                     
               

                  )
              }
              )} 


             <div className="yemek">
             
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
        }}>
        
          <div className="App">
         

            <div className="categ">
           
            <div className="categ-1">
            <form onSubmit={getSearch4} className="search-form1">
            <button  className="search-button1" type="submit" >Başlangıç</button>
            </form>
            <form onSubmit={getSearch5} className="search-form1">
            <button  className="search-button1" type="submit" >Ara sıcak</button>
            </form>
            <form onSubmit={getSearch1} className="search-form1">
            <button  className="search-button1" type="submit" >Ana Yemek</button>
            </form>
            
            <form onSubmit={getSearch3} className="search-form1">
            <button  className="search-button1" type="submit" >Salata</button>
            </form>
            <form onSubmit={getSearch2} className="search-form1">
            <button  className="search-button1" type="submit" >Tatlı</button>
            </form>
            <form onSubmit={getSearch6} className="search-form1">
            <button  className="search-button1" type="submit" >İçecek</button>
            </form>
            </div>
            <div className="search-5">
            <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange={updateSearch} />
              <button  className="search-button" type="submit" >Ara</button>
            </form>
            </div>
            </div>
            <div className="recipes">

              {recipes.map(recipe => (
                  <Recipe 

                  key={recipe.recipe.calories}
                   title={recipe.recipe.label} 
                    
                   image={recipe.recipe.image}
                   ingredients={recipe.recipe.ingredients}>

                   </Recipe>

              ))}
              </div>
          </div>
          </motion.div> 
      );   </div>
              </div>
      
  )
}
export async function getStaticProps(){

  const avatars= await fetch ("https://randomuser.me/api/?results=1").then(r=>r.json());
 
  console.log(avatars.results);
  
  return{
      props:{
          avatars
      }
  }

  
}







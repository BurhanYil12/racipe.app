import { useState } from 'react';
import Link from 'next/link';
import Head from "next/head";
import Image from 'next/image'
import profilePic from '../pictures/food.jpg'
import logo from "../pictures/logo1.png"



const Ap =()=> {


    return(
<div className="App1">
        <Head>
           <title>Dünya Mutfağı</title>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
           <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;1,600&display=swap" rel="stylesheet"></link>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
        </Head>

        <div className="ortala">
        <Image className="img-fluid img-border"  src={logo}  width={400}
                        height={200} />


        </div>
        <div className="cont">
            <div className="pic">
            <Image   src={profilePic}  width={350}
                        height={400} />

            </div>
            <div className="q-input-wrapper">
                <form>
                <div className="y">
               
                   <h3> Giriş sayfası</h3>
                   <hr />
                     
                    
                </div>
                <div>
                    <label className="q-label">E-Posta</label>
                    <input className="q-input form-control" type="email" />
                </div>
                <div>
                    <label className="q-label">Şifre</label>
                    <input className="q-input form-control" type="password" placeholder="******" />
                    
                </div>
                <div>
                <Link href="./randomuser"><button className="btn1">Giriş</button></Link> 
                   
                </div>
                <div>
                <div>
                    <a href="#">Şifremi Unutum</a>
                    </div>
                    <a href="#">Üye Ol</a>
                </div>


                </form>
            </div>
        </div>







</div>
         
         
         
         
         )}
  
  export default Ap;
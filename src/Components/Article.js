import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export const Article = () => {
   const {id } =useParams();
   const [profile, setProfile] = useState([]);
   
   
const Article = async( )=> {
   try{
      const response = await axios.get(`https://newsappbe.onrender.com/user/getid/${id}`);
   
      //console.log("RESPONCE",response.data.data);
      const Data = response.data.data;
      setProfile(Data);
      
      
     } catch(error) {
      console.error('Failed to fetch data:', error);
     }

   }
  
  useEffect(() => {
   Article()

   },[]);
   
      const goBackOneStep = () => {
        window.history.go(-1);
      };

 

  
 
  return ( 
    <div>
        <div class="blog_area single-post-area section-padding">
    <div class="container">
   
       <div class="row" >
      
          <div class="col-lg-8 posts-list mt-5">

            <div class="col  ">
         
         
                <div  class="col-sm-12 posts-list mt-3" >
                    <div class="single-post">

                             <img
                                   src={`data:image/png;base64,${profile.file}`} 
                                    alt="banner"
                                    class="img-fluid"
                                  />
                        <p  onClick={goBackOneStep} >  Go Back</p>
                        <div class="blog_details">
                           <h2>
                    
                         {profile.header}
 
                           </h2>
                           <div class="blog-info-link mt-3 mb-4">

                            <div >
                            {profile.content}
                            </div>
                            
                              
                           </div>
                           <p class="excert">
                          
                     

                           </p>
                          
                        </div>
                     </div>
                    
                </div>
       

            </div>
            




          </div> 
     
           <div class="col-lg-4">
             <div class="blog_right_sidebar">
               

             </div>
          </div>
       </div>
   

 
    </div>





        
    </div>  
    </div>
    )}



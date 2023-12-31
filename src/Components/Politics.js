import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, } from 'react-router-dom';






export const Politics = () => {
  const [dataShow, setData] = useState([]);
  const [dataShow1, setData1] = useState([]);

  

  const navigate = useNavigate();

  useEffect(() => {
    Politics();
    Politics1();
    
    
     
  },[]);

   // POLITICS 1 TO 5
   const Politics = async () => {
    try {
      const response = await axios.get('https://newsappbe.onrender.com/user/getPolitics');
      const Data = response.data.data;
      setData(Data);
      //console.log(Data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
   // POLITICS 5 TO 10
   const Politics1 = async () => {
    try {
      const response = await axios.get('https://newsappbe.onrender.com/user/getPolitics/five');
      const Data = response.data.data;
      setData1(Data);
    
     // console.log(Data); 
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };


  

 // Article 

 

  const GetById = async (id) => {
    try {
       navigate(`article/${id}` )
     
    } catch (error) {
      console.error('Error deleting document', error);
    }
    
  };
  


  return (
    
    <div class="Politics-banner" >
       
  <div class="container">
    <div class="row  " >
      <div class="col-12 ">

        <div class="content-wrapper">
        <div class="container">
        
          <div class="col-sm-12 ">
            <div class="card " data-aos="fade-up">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <h1 class="font-weight-300 mb-4">
                      அரசியல்
                    </h1>
                    

                  </div>
                </div>
                <div class="row ">
                
                  <div class="col-lg-8 mt-3 ">
               
                  {dataShow.map((item, index) => (

                  <div class="row  CardPolitics CardImg" onClick={() => GetById(item._id)} key={index} >
                    <div class="col-sm-4" > 
                      <div class="rotate-img">
                        <img  
                          src={`data:image/png;base64,${item.file}`}
                          alt="banner"
                          class="img-fluid"
                          
                        />
                      </div>
                    </div>


                    <div class="col-sm-8 ">
                      <h5 class=" font-weight-600 mt-3">
                      {item.header} 
                        
                      </h5>
                      <p class="text-muted mb-0" >
                        <span class="mr-2">
                           {new Date(item.updatedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true })}
                                    </span>
                      </p>
                      
                      
                    </div>
                  </div>
                  
                  ))}
              
                </div>
         
      

                  

                  







                    
                    
                    <div class="col-lg-4">
                      <h2 class="mb-4 text-primary font-weight-600">
                        Relatated News
                      </h2>
           
                      {dataShow1.map((item, index) => (
                      <div class="row RelatatedNews"  key={index} >
                      
                        <div class="col-sm-12">
                        
                          <div class="border-bottom pb-2 pt-2">
                          
                            <div class="row" onClick={() => GetById(item._id)}>

                              <div class="col-sm-8">
                                <h5 class="font-weight-600 mb-1 smallFont">
                                 {item.header}
                                </h5>
                                <p class="text-muted mb-0" >
                                  <span class="mr-2"> {new Date(item.updatedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true })}</span>
                                </p>
                              </div>
                              <div class="col-sm-4">
                                <div class="rotate-img">
                                  <img
                                      src={`data:image/png;base64,${item.file}`}
                                    alt="banner"
                                    class="img-fluid"
                                  />
                                </div>
                                 
                              </div>
                            </div>
                            

                          </div>
                          
                        </div>
                        
                      </div>
                      ))}
                 
                     
                     





                      
                    </div>

                               
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
     

      </div>
     

    </div>

   </div>


</div>
    
  )
}

import React from 'react';
import { useForm } from 'react-hook-form';
import  axios from 'axios';
import { useState } from 'react';
import { useEffect  } from 'react';



export const Admin = () => {
    const { register , handleSubmit , reset , formState: { errors },setValue } = useForm();
    const [dataShow, setData] = useState([]);
    //For Frontend
    const [ShowImage, setImage] = useState();
    const [editID , seteditID ] = useState();
  
    //BS64 DATA to show Image in FE
  
    // Sent BS64 Data to DB
    const [selectedBase64 , setBase64 ] = useState();
    
    
    console.log(editID)
    
     
    useEffect(() => {
      GetAll();
     
    }, []);
     

    //Image
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
     
       if (file) {
        reader.readAsDataURL(file);
        
      }
  
        reader.onloadend = () => {
         setImage(reader.result)
        const base64String = reader.result.split(',')[1]
       // console.log(base64String);
        setBase64 (base64String)
   // console.log("setBase64 ", selectedBase64 )
      }
       
    


    };
    // POLITICS
    const Politics = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getallPolitics');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); 
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };


    //CRIME
    const Crime = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getallcrime');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); 
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    //TECH
    const Tech = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getAllTech');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); // Logging the data to the console
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    //SPORTS
    const Sports = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getAllSports');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); // Logging the data to the console
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    //CINEMA
    const cinema = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getAllCinema');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); // Logging the data to the console
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    //HEALTH
    const Health = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getAllHealth');
        const Data = response.data.data;
        setData(Data);
        console.log(Data); // Logging the data to the console
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    //ALL
    const GetAll = async () => {
      try {
        const response = await axios.get('https://newsappbe.onrender.com/user/getAll');
        const Data = response.data.data;
        setData(Data);
        // Data.map((item, index) => (
        //   setBase64ImageData(item.file)
        // )
        //  )
        console.log(Data); // Logging the data to the console
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    

      // Create 
    
    const onSubmit = async (data) => {
    
      console.log(data.file);
      console.log(data.header)
     
      const formData = new FormData();
      
          formData.append('file', selectedBase64);
          formData.append('header', data.header);
          formData.append('content', data.content);
          formData.append('topic', data.topic);
          
          for (const [key, value] of formData.entries()) {
            console.log("Enter Data",`${key}: ${value}`);
          }
         
          
          
      if(editID){

      
      
        
        try {
          await axios.put(`https://newsappbe.onrender.com/user/update/${editID}`, formData, {
            

            headers: {
              'Content-Type': 'multipart/form-data',
             
            },
          });
         
          alert("Do you Want UPDATE THIS NEWS...!")
         
        
        } 
         catch (error) {
           console.log(error);
         }
         reset();
      //  setImage();
       window.location.reload();
       window.location.href = '/';

      }
      else{
        try {
          
            await axios.post('https://newsappbe.onrender.com/user/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
       
           
          // Image and text uploaded successfully
           alert("NEWS Added Sucessfully...!");
          
        } catch (error) {
          console.error('Error uploading image and text', error);
        }
         reset()
        //setImage();
       window.location.reload();
       window.location.href = '/';
        

      }
      
      
    };

     //Delete

     

     const handleDelete = async (id) => {
       try {
         await axios.delete(`https://newsappbe.onrender.com/user/delete/${id}`);
         setData(dataShow.filter(item => item._id !== id));
       } catch (error) {
         console.error('Error deleting document', error);
       }
     };
     
     //EDIT
     const Edit = async (item) => {
      
      console.log("File By clicked",item);
    
      
     setImage(`data:image/png;base64,${item.file}`);
    //  const val = `data:image/png;base64,${item.file}`
     
     
   

      setValue("header", item.header);
      setValue("topic", item.topic);
      setValue("content", item.content);
      setBase64("file", item.file);
      //setImage(item.url);
      seteditID(item._id);

     window.scrollTo({top:0, behaviour:'smooth' });
      
    };
    

     
    



   
  return (
  
     
     
        
    <div class="container mt-4">
   <form onSubmit={handleSubmit(onSubmit)}>

   <div class="admin-card">
         <h1>Admin Panel</h1>
           
            <div class="form-group">
                <label >Header</label>
                <input type="text"
                name="header"
                placeholder="header"
                {...register('header', {
                  required:{
                    value:true,
                    message:"Header is required"
                  },
                 
                } )}
                 class="form-control" 
                 id="header"   
                  />
         
                
            </div>
             {errors.header && <div style={{color:"red"}} >{errors.header.message}</div>} 
            <br></br>
            <div className="form-group">
                <label>Topic</label> 
                 
                  <select  {...register('topic'  ,  {
                  required:{
                    value:true,
                    message:"Select is Catagory",
                    
                  },
                 
                })} style={{ width: '200px' , marginLeft: '10px'}} >

                    <option value="அரசியல்">அரசியல்</option>
                    <option value="குற்றம்">குற்றம்</option>
                    <option value="டெக்னாலஜி">டெக்னாலஜி</option>
                    <option value="விளையாட்டு">விளையாட்டு</option>
                    <option value="சினிமா">சினிமா</option>
                    <option value="ஆரோக்கியம்">ஆரோக்கியம்</option>

                 </select>
                




                {/* <Controller
                name="topic"
                control={control} 
                defaultValue="அரசியல்"
                render={({field})=> (
                    <select {...field} name="topic" id="topic" class="form-control" >
                    
                    <option>அரசியல்</option>
                    <option>குற்றம்</option>
                    <option>டெக்னாலஜி</option>
                    <option>விளையாட்டு</option>
                    <option>சினிமா</option>
                    <option>ஆரோக்கியம்</option>

                      
                    </select>

                )}>

                </Controller>  */}
                
               
            </div>

            {errors.topic && <div style={{color:"red"}} >{errors.topic.message}</div>}

            
            
             <div>
          <label >Select images:</label>
          <input
            type="file"
            id="images"
            name="file"
            accept="image/*"
            defaultValue={null}
            {...register('file', {required:true, })}
            onChange={ handleImageChange }
          /> 
 
          <img name="file" id='file' src={ ShowImage} alt='' style={{width:'100px', height:'100px'}} />

        </div> 
       
            
        
            <div class="form-group">
                <label >Content</label>
                
                <textarea id="content"
                {...register('content', {required:{
                  value:true,
                  message:"Content is required"
                }})}
                class="form-control" 
                placeholder="Enter content" 
                name="content" rows="20" cols="0"></textarea>
            </div>
           {errors.content && <div style={{color:"red"}}>{errors.content.message}</div>} 

           
         
             <div class="button-container">
             <button type="submit" class="btn btn-primary " >Submit</button>
        </div>
        

        
        </div>
        
   </form>
    

   <div class="pb-2 pt-5" >
<button onClick={Politics} >அரசியல்</button>
<button onClick={Crime} >குற்றம்</button>
<button onClick={Tech} >டெக்னாலஜி</button>
<button onClick={Sports} >விளையாட்டு</button>
<button onClick={cinema} >சினிமா</button>
<button onClick={Health} >ஆரோக்கியம்</button>
<button onClick={GetAll} >GetAll</button>
</div>

<div class="container mt-4">
    <h2 style={{backgroundColor: 'pink'}}>ADDED NEWS</h2>
    <table class="table">
        <thead>
            <tr>
                <th className='text-bg-primary' scope="col1">HEADER</th>
                <th className='text-bg-primary' scope="col1">IMAGE</th>
                <th className='text-bg-primary' scope="col1"></th>
                
            </tr>
        </thead>
        <tbody>

        {dataShow.map((item, index) => (
         <tr key={item._id} >
         <td> {item.header} </td>
         <img src={`data:image/png;base64,${item.file}`} style={{width:'100px', height:'100px'}}  alt="" />
         
         
           
         <td >
             <button onClick={() => Edit(item)} type="button" className="btn btn-success " style={{margin:"5px"}} >Edit</button>
             <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-danger" >Delete</button>
         </td>
     </tr>
        ))}
            
        </tbody>

    </table>
</div>




   
        
    
    </div>
    
    
  
  )
}

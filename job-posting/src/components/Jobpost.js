import React, { useState, useEffect } from "react"

function Jobpost(){

   const initialValues = { 
       JobTitle : "",
       Location : "",
       jobdescription : "",
       Experience :"",
       Category : "",
       FunctionalArea :"",
       GraduatingYearStart:"",
       GraduatingYearEnd:""

   }

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   function changeHandler(e){
       const{name,value} = e.target
       setFormValues({...formValues,[name]:value})

   }


   function submitHandler(e){
       e.preventDefault();
       setFormErrors(validate(formValues));
       setIsSubmit(true);
   }

   useEffect(()=>{
       console.log(formErrors);
       if (Object.keys(formErrors).length=== 0 && isSubmit){
              console.log(formValues);
       }
   },[formErrors])


   const validate = (values)=>{
       const errors  = {}
    
       if (!values.JobTitle){
           errors.Jobtitle = "Job title is required!"
       }
       if (!values.Location){
           errors.Location = "Location is required!"
       }
       if(!values.jobdescription){
           errors.jobdescription = "This field is required!"
       }

       return errors;

   }

    return(<>
       <article>
       <h1>Basic Details</h1>
       <hr />
       </article>

       <form action="" onSubmit={submitHandler}>
           <label>Job Title    </label>
           <input type="text" 
                  placeholder="Title of your Job Profile"
                  name="JobTitle"
                  value={formValues.JobTitle}
                  onChange={changeHandler}
           />
           <p>{formErrors.Jobtitle}</p>
           <br/>

           <label>Location</label>
           <input 
               type="text"
               name="Location"
               value={formValues.Location}
               onChange={changeHandler}
           />
           <p>{formErrors.Location}</p>

           <br/>

           <label >Job Description</label>
           <textarea name="" id="" cols="30" rows="10" name="jobdescription" value={formValues.jobdescription} onChange={changeHandler}></textarea>
           <p>{formErrors.jobdescription}</p>
           <br />

           <label>Years of experience</label>
           <select className="date" name="Experience" id="" onChange={changeHandler} >
               <option value="2 months">0 Months - 1 Year</option>
               <option value="3 months">More than 1 Year</option>
               <option value="3 months">More than 5 Year</option>
               <option value="3 months">More than 10 Year</option>
               <option value="3 months">Expert</option>
           </select>
           <br />

   

           <article> 
           <h1>Targeting</h1>
           <hr />
           </article>

           <label >Category</label>
           <select className="date" name="Category" id="" onChange={changeHandler}>
               <option value="SDE">SDE</option>
               <option value="Testing engineer">Testing engineer</option>
               <option value="Data science">Data science</option>
               <option value="Algorithm Dev">Algorithm Developer</option>
               <option value="ML/AI">ML/AI</option>
           </select>

           <label >FunctionalArea</label>
           <select className="date" name="Functional Area" id="" onChange={changeHandler}>
               <option value="frontend">Frontend</option>
               <option value="backend">Backend</option>
               <option value="fullstack">FullStack</option>
           </select>
           <br />
           
           <label >Graduating Year| Start</label>
           <input type="date" name="GraduatingYearStart" onChange={changeHandler}/>

           <br />

           <label >Graduating Year| End</label>
           <input type="date" name="GraduatingYearEnd" onChange={changeHandler}/>

    
           <br />

        

           <button className="btn button3 ">Submit</button>
           <br />
           <hr />
        
       </form>

       <pre>{JSON.stringify(formValues, undefined,2)}</pre>
       
      
        

    </>);
}

export default Jobpost;
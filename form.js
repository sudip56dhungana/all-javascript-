const display=(msg,idValue,color1)=>{
    document.getElementById(idValue).innerHTML=msg
    document.getElementById(idValue).style.color=color1
       }
       const fnamevalidate=()=>{
       let result= document.getElementById("fname").value
       if(result==""){
        display("*first name is mandatory", "fmessage","red")
       }
       else if(!result.match(/^[a-zA-Z]+$/g)){
          display("first name should be alphabets only", "fmessage", "green")
         
       }
       
      else if(result.length<=2||result.length>=22){
        display("*first name should be greater than 2 and less than 22", "fmessage","red")
    
      }
      else{
        display("valid first name", "fmessage", "green")
      }
       }

       const lnamevalidate=()=>{
        let result1= document.getElementById("lname").value
        if(result1==""){
         display("*last name is mandatory", "lmessage","red")
        }
        else if(!result1.match(/^[a-zA-Z]+$/g)){
           display("last name should be alphabets only", "lmessage", "green")
          
        }
        
       else if(result1.length<=2||result1.length>=22){
         display("*last name should be greater than 2 and less than 22", "fmessage","red")
     
       }
       else{
         display("valid last name", "lmessage", "green")
       }
        }



        const emailvalidate=()=>{
            let result2= document.getElementById("email").value
            if(result2==""){
             display("*email is mandatory", "emailmessage","red")
            }
            else if(!result2.match(/^[a-z][a-z_!.0-9]{3,22}@[a-z]{1,21}.[a-z]{1,4}[.a-z]{1,9}.[a-z]{1,4}$/g)){
               display("email not valid", "emailmessage", "green")
              
            }
            
          
           else{
             display("valid email id", "emailmessage", "green")
           } 
            }
            
            const passwordvalidate=()=>{
              let result3= document.getElementById("pw").value
              if(result3==""){
               display("*password is mandatory", "passwordmessage","red")
              }
              else if(!result2.match(/^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&()-])(?=.[0-9])[A-Za-z0-9!@#$%^&()-]{8,16}$/g)){
                 display("password not valid", "passwordmessage", "green")
                
              }
              
            
             else{
               display("valid password", "passwordmessage", "green")
             } 
              }

    
              const cpvalidate=()=>{
                let result3= document.getElementById("pw").value
                let cp=document.getElementById("cpw").value
                if (p=cpw)
                {
                  display("password  matched", "cpasswordmessage", "green")
                }
               
                  
                  
                
              
               else{
                 display("valid password", "cpasswordmessage", "green")
               } 
                }
    
       //^[a-zA-Z]{3,22}$
      // ^[a-z][a-z_!.0-9]{3,22}@[a-z]{1,21}.[a-z]{1,4}[.a-z]{1,9}.[a-z]{1,4}$$
    
      //^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&()-])(?=.[0-9])[A-Za-z0-9!@#$%^&()-]{8,16}$
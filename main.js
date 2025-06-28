



const myForm=document.getElementById('form');
const inputs=document.querySelectorAll('.form-control input');
    

const validateField=(field, isInitialLoad=false)=>{
   const errorElement=document.querySelector(`#${field.id}-error`);
   const value = field.value.trim();
   field.classList.remove('invalid','valid');
   errorElement.style.display='none';
   errorElement.textContent=''

   if(isInitialLoad &&  value==='' ){
    return
   }

   if(value===''){
      if(field.hasAttribute('required')){
        field.classList.add('invalid');
        errorElement.style.display='block';
        errorElement.textContent='this field is required'
      }
   }

   if(!field.validity.valid){
    field.classList.add('invalid');
    errorElement.style.display='block';

      if(field.validity.typeMismatch&&field.type==='email'){
        errorElement.textContent='Please enter a valid email'; 
      }else if(field.validity.tooShort){
         errorElement.textContent=`A minimun of ${field.minLength} is required`; 

      }else{
        errorElement.textContent=field.validationMessage || 'invalid value'
      }
   }else{
    field.classList.add('valid');
   }
}

  const initialValidation= ()=>{
    inputs.forEach(input=>{
      validateField(input,true)
    })

    inputs.forEach(field=>{
      field.addEventListener('input',function(){
        validateField(this)
      })
    })
  }

document.addEventListener('DOMContentLoaded',initialValidation)








 





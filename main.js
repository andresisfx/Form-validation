

document.addEventListener('DOMContentLoaded',(e)=>{

    const myForm=document.getElementById('form');
    const inputs=document.querySelectorAll('.form-control input');
 console.log(myForm,inputs)
    inputs.forEach(input=>{
      input.addEventListener('input',()=>{
        validateField(this)
      })
    })
    const validateField= (field)=>{
       const errorelement= document.getElementById(`${field.id}-error`)
       if (field.validity.valid) {
         field.classList.remove('invalid');
         field.classList.add('valid');
         errorelement.style.display='none'
       }else{
         field.classList.remove('valid');
         field.classList.add('invalid');
         errorelement.style.display='block'
       }
    }
    myForm.addEventListener('submit',(e)=>{
      e.preventDefault()
      let validity=true
       inputs.forEach(input=>{
          const validField= validateField(input);
          if(!validField){
            validity=false;
            return
          }
       })

       if(validity){
        alert('Information submited succesfully');
        inputs.forEach(input=>{
          input.classList.remove('valid');
          input.value=''
        })
       }
    })



})
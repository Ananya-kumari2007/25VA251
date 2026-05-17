import React from 'react'

function studentregistrationform() {
    const [data ,setdata ] = useState ({name:'',tel: ' ', email});
    const handlechange = (e)=>{
      setdata ({ ...data  })
    }
  return (
    <div>
      <h1>student registration form</h1>
      <form>
        <input type = 'text'name = 'name' placeholder = 'enter name ' value = {data.name}/>
        <input type = 'tel'name ='tel' placeholder ='enter mobile ' value = {data.tel}/>
        <input type = 'email'name ='email' placeholder ='enter email' value = {email.tel}/>
        <button type = 'submit'> register here </button>
      </form>
    </div>
  )
}

export default studentregistrationform
                              
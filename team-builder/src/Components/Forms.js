import React,{useState,useEffect}  from 'react'




export default function Forms({members,setMembers,membersList,setMembersList,id,setId,editMembers,setEditMembers}){

    const [verifyMembers,setVerifyMembers] = useState({
        name: null,
        email: null,
        job: null,
        mbti:null

    })

    useEffect(()=>{
        if(editMembers){
            setVerifyMembers(editMembers)
        }

    },[editMembers])
    function handleChange(e){
        setMembers({...verifyMembers, [e.target.name] : e.target.value})
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if (editMembers) {
            membersList.forEach((element, key) => {
              if (element.id === editMembers.id) {
                setMembersList(membersList[key] = verifyMembers);
              }
            })
          } 
            setMembersList([...membersList, members]);
            setId(id + 1);
        }
        


    

   

    return(
        <div>
            <form >
                {/* Name */}
                <label>
                    Name:
                    <input
                        type = 'text'
                        name = 'name'
                        placeholder = 'Enter Name:'
                        onChange = {handleChange}  
                        value = {verifyMembers.name}
                    />
                </label>

                {/* Email */}
                <label>
                    Email:
                    <input
                        type = 'email'
                        name = 'email'
                        placeholder = 'Enter Email:'
                        onChange = {handleChange} 
                        value = {verifyMembers.email} 
                    />
                </label>

                {/* Job */}
                <label>
                    role:
                    <input
                        type = 'text'
                        name = 'role'
                        placeholder = 'Enter Job:'
                        onChange = {handleChange} 
                        value = {verifyMembers.role} 
                    />
                </label>
                {/* MBTI*/}
                <label>
                    MBTI:
                    <input
                        type = 'text'
                        name = 'mbti'
                        placeholder = 'Enter MBTI:'
                        onChange = {handleChange}  
                        value = {verifyMembers.mbti}
                    />
                </label>

                <button type = 'submit' onClick ={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}



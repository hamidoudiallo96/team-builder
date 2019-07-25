import React,{useState} from 'react';
import Forms from './Components/Forms.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Members from './Components/Members';
import {Button} from 'semantic-ui-react'


function App() {
  // form inputs
  const [members,setMembers] = useState({
    name: 'Hamidou Diallo',
    email: 'Dio.Hamidou@gmail.com ',
    role: 'Software Developer',
    mbti: 'INTJ'


  })
  // list for form inputs
  const [membersList, setMembersList] = useState([members]);
  
  // id 
  const [id, setId] = useState(0);

  // for edit button
  const [editMembers, setEditMembers] = useState();

  function membersToEdit(item){
    membersList.forEach(element =>{
      if(element.id === item ){
        setEditMembers(members)
      }
    })
  }
  return (
    <div className="App">
      {/* <MembersList arr ={membersList} /> */}
      <Forms
        members = {members} setMembers = {setMembers} 
        membersList = {membersList} setMembersList ={setMembersList}
        id = {id} setId ={setId}
        editMembers = {editMembers} setEditMembers = {setEditMembers}

        /> 
      <Members members = {members} editMembers = {editMembers} membersList = {membersList} setMembersList = {setMembersList} />
    </div>
  );
}

export default App;


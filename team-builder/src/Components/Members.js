import React from 'react'
import {Card,Button,Header} from 'semantic-ui-react'

export default function Members ({members,membersList,setMembersList,membersToEdit}){
    console.log(membersList)

    return(
        <div>
            {membersList.map(element =>(
            <Card
        // href='#card-example-link-card'
                header={<div>
                    <Header as = 'h1'>{element.name}</Header>
                </div>}
                meta= {element.mbti}
                description= {
                    <div>
                        <h3>{element.email}</h3>
                        <h3>{element.role}</h3>
                    </div>
                }
                extra = {
                    <Button primary onClick = {() => membersToEdit(element.id)}>
                        Edit
                    </Button>
                }
                
                
            />
            
        ))}

        </div>
    
    )
}
import React from 'react'

import {Container, Role, User, Avatar} from './styles'


interface UserProps{
    nickname: String;
    isBot ?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
    return (
    
    <User>
        <Avatar className={isBot ? 'bot': ''} />
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
    </User>
   
    )
}

//typecripting
const UserList: React.FC =() => {
    return(
        <Container>
            <Role>
                Disponivel-1
            </Role>
            
            <Role>
                Offiline - 18
            </Role>
            
          
        </Container>
        
    
    )
};

export default UserList
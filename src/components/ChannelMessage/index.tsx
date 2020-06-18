import React from 'react'

import { Container, Avatar, Message, Header, Content} from './styles'

export {Mentions} from './styles'
export interface Props{
    author: String;
    date: String;
    content: String;
    hasMention?: boolean;
    isBot?: boolean;
}
//typecripting
const ChannelName: React.FC<Props> =({
   author,date,content,hasMention,isBot 

}) => {
    return(
        <Container className={hasMention ? 'mention': ''}>
           
            <Avatar className={isBot ? 'bot':''}/>  
            
            <Message>
                <Header>
                <strong>{author}</strong>
                 {isBot && <span>Bot</span>}
                <time>{date}</time>
                </Header>
                <Content>Hoje é meu aniversario.</Content>
            </Message>
           
        </Container>
        
    
    )
};

export default ChannelName
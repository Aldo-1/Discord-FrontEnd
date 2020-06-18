import React from 'react'
import ChannelMessage, {Mentions} from '../ChannelMessage'
import {Container,Messages,InputWrapper,Input, InputIcon }  from './styles'


//typecripting
const ChannelData: React.FC =() => {
    return(
        <Container>
           <Messages>
               <ChannelMessage 
               author="ALDORX"
               date="21/02/2020"
               content="Hoje sou eu" />
           </Messages>


           <InputWrapper>
              <Input type="text" placeholder="Conversa no #chat-livre"/>
              <InputIcon/>
           
           </InputWrapper>
           
        </Container>
        
    
    )
};

export default ChannelData
import React from 'react'

import {Container, Profile ,Icons , Avatar, UserData, MicIcon, HeadphoneIcon, SettingsIcon} from './styles'


//typecripting
const UserInfo: React.FC =() => {
    return(
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>AldoRX</strong>
                    <span>#2345</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/> 
            </Icons>
          
        </Container>
        
    
    )
};

export default UserInfo;
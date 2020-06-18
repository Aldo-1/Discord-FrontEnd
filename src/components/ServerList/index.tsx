import React from 'react'
import ServerButton from '../ServerButton'
import {Container, Separator} from './styles'

const ServerList: React.FC = () => {

return (
    <Container>
        <ServerButton isHome/>

        <Separator />

        <ServerButton hasNotifications/>
        <ServerButton hasNotifications/>
        <ServerButton mentions={72}/>
        <ServerButton />
        <ServerButton/>
        <ServerButton/>
    </Container>
)

};


export default ServerList
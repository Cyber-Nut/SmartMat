import React from 'react';
import type { PropsWithChildren } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
    name : string;
}>

const Icons = ({name}: IconsProps)=>{
    switch(name){
        case 'home':
            return <Icon name="home" size={30} color="black"/>;
            break;
        case 'yoga':
            return <Icon name="heart" size={30} color="black"/>;
            break;
        case 'account':
            return <Icon name="user" size={30} color="black"/>;
            break;
        case 'google':
            return <Icon name="google" size={30} color="black"/>;
            break;
        case 'ios':
            return <Icon name="apple" size={30} color="black"/>;
            break;
        default:
            break;


    }
};

export default Icons;

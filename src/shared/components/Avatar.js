import { styled } from '@mui/system';
import React from 'react';

const AvatarPreview =styled('div')({
    height:'42px',
    width:'42px',
    backgroundColor:'#5865f2',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'700',
    fontSize:'20px',
    marginLeft:'5px',
    color:'white',
    borderRadius:'50%',
})

const Avatar = ({username,large}) => {
    return (
        <AvatarPreview style={large?{height:'80px', width:'80px'}:{}}>
            {username.substring(0,2)}
        </AvatarPreview>
    );
};

export default Avatar;
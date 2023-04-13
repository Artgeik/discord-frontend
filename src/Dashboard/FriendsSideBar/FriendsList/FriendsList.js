import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendListItem';
import {connect } from 'react-redux';


const MainContainer = styled('div')({
    flexGrow:1,
    width:'100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => String(user.userId) === String(f.id));
    f.isOnline = isUserOnline ? true : false;
  });
  console.log(onlineUsers,"this is friends");
  return friends;
};

const FriendsList = ({friends,onlineUsers}) => {
    return (
        <MainContainer>
            {checkOnlineUsers(friends,onlineUsers).map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({friends}) =>{
  return{
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import {connect} from 'react-redux';

const MainContainer = styled('div')({
    width:'100%',
    height:'22%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'aut0',
});

const PendingInvitationsList = ({pendingFriendsInvitations}) => {
    return (
        <MainContainer>
            {pendingFriendsInvitations.map((inv)=>(
                <PendingInvitationsListItem
                id={inv._id}
                username={inv.senderId.username}
                mail={inv.senderId.mail}
                key={inv._id}
                />
            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({friends}) =>{
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(PendingInvitationsList);
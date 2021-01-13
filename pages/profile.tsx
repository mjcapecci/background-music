import React from 'react';
import CenterContainer from '../components/containers/centerContainer';
import ProfileGrid from '../components/containers/profileGrid';

export const Profile: React.FC = ({}) => {
  return (
    <ProfileGrid>
      <CenterContainer>
        <p>Profile Details Component</p>
      </CenterContainer>
      <CenterContainer>
        <p>My Downloads Component</p>
      </CenterContainer>
      <CenterContainer>
        <p>My Uploads Component</p>
      </CenterContainer>
    </ProfileGrid>
  );
};

export default Profile;

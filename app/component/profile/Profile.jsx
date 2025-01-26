import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './profileTabs/ProfileDetails';
import ProfileTopInfo from './ProfileTopInfo';

const Profile = ({ loggedUser, completionPercentage }) => {
  return (
    <View style={styles.container}>
      <ProfileHeader />  {/* ProfileHeader will be sticky at the top */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ProfileTopInfo loggedUser={loggedUser} completionPercentage={completionPercentage} />
        <ProfileDetails loggedUser={loggedUser} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,  // Adjust for the sticky header height
  },
  scrollView: {
    paddingTop: 60,  // Ensure content doesn't go behind the header
  },
});

export default Profile;

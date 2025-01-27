import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        Welcome to our app. Your privacy is important to us, and we are committed to protecting the personal information you share with us.
      </Text>

      <Text style={styles.sectionTitle}>2. Information We Collect</Text>
      <Text style={styles.text}>
        - Personal Information: Name, email, profile photo, and any other details you provide. {'\n'}
        - Usage Data: Information about how you use the app, such as interactions and preferences.
      </Text>

      <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
      <Text style={styles.text}>
        We use the information collected to:{'\n'}
        - Provide and improve our services.{'\n'}
        - Communicate with you.{'\n'}
        - Ensure security and prevent fraud.
      </Text>

      <Text style={styles.sectionTitle}>4. Sharing of Information</Text>
      <Text style={styles.text}>
        We do not share your personal information with third parties, except when required by law or with your explicit consent.
      </Text>

      <Text style={styles.sectionTitle}>5. Your Rights</Text>
      <Text style={styles.text}>
        - Access: You can request access to the personal data we hold about you.{'\n'}
        - Deletion: You can request to delete your personal data at any time.
      </Text>

      <Text style={styles.sectionTitle}>6. Changes to This Policy</Text>
      <Text style={styles.text}>
        We may update this Privacy Policy from time to time. Changes will be communicated via the app.
      </Text>

      <Text style={styles.sectionTitle}>7. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions or concerns, feel free to contact us through the app or by email.
      </Text>

      <Text style={styles.footer}>Thank you for trusting us!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
    textAlign: 'center',
  },
});

export default PrivacyPolicy;

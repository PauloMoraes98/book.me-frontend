import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

export default function Profile() {
  const {logout, user } = useAuth();

  return (
    <View style={styles.header}>
      <Text>Profile</Text>
    </View>
  )
}

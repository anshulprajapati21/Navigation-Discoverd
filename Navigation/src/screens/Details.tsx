import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

// Type definition for the navigation properties specific to the 'Details' screen
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

// 'Details' component which receives props and extracts 'route' to get parameters
const Details = ({ route }: DetailsProps) => {
  const { productId } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
    </View>
  );
};

// Styles for the 'Details' component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});

export default Details;

import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { PermissionStatus } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imageInfo, setImageInfo] = React.useState();

  const handlePress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === PermissionStatus.GRANTED) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
        setImageInfo(result);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Pick image' onPress={handlePress} />
      {imageInfo && <Text>{imageInfo.uri}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Image, Platform, Text } from 'react-native';
import SafeContainer from '@/components/SafeContainer';

export default function TabTwoScreen() {
  return (
    <SafeContainer>
      <Text style={{color: "white"}}>Hola</Text>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

import { StyleSheet, Image, Platform, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from "react-native-safe-area-context";
import SafeContainer from '@/components/SafeContainer';

export default function TabTwoScreen() {
   return (
      <SafeContainer>
         <Text style={{ color: "white" }}>metricas analisis form</Text>
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

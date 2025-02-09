import { StyleSheet, Image, Platform, Text, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ButtonActionBotton from '@/components/ui/ButtonActionBotton';
import { useRouter } from 'expo-router';
import SafeContainer from '@/components/SafeContainer';

export default function HistoryMetrics() {
   const router = useRouter()
   return (
      <SafeContainer>
         <View style={{ alignSelf: "center" }}>
            <Text style={{ color: "white" }}>no hay analisis</Text>
            <Pressable onPress={() => { router.push("/detailMatrica") }}>
               <Text style={{ color: "white" }}>ir a detalles</Text>
            </Pressable>
         </View>
         <ButtonActionBotton />
      </SafeContainer>
   );
}



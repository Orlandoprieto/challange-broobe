import { View } from 'react-native';

import ButtonActionBotton from '@/components/ui/ButtonActionBotton';
import { useRouter } from 'expo-router';
import SafeContainer from '@/components/SafeContainer';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Text } from '@/components/ThemedText';

export default function HistoryMetrics() {
   const [history, setHistory] = useState([])
   
   return (
      <SafeContainer>
         {
            (history.length == 0)
               ? <MessaggeEmptyHistory />
               : (
                  <View>
                     <ButtonActionBotton />
                  </View>
               )
         }
         
      </SafeContainer >
   );
}

const MessaggeEmptyHistory = () => {
   const router = useRouter()

   const onPress = () => {
      router.push("/metricAnalysisForm")
   }

   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
         <View style={{ gap: 25, width: '80%' }}>
            <View style={{ gap: 10, alignItems: "center", justifyContent: "center" }}>
               <Text type="title">Oh oh, aqui no hay nada</Text>
               <Text>Aún no tienes análisis. Realiza uno para comenzar.</Text>
            </View>
            <Button title='Realiza un analisis' onPress={onPress}/>
         </View>
      </View>
   )
}



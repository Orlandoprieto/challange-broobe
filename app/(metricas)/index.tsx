import { useEffect, useState, useId } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import CardHistory from '@/components/CardHistoriy';
import ButtonActionBotton from '@/components/ui/ButtonActionBotton';
import SafeContainer from '@/components/SafeContainer';
import { deleteMetricFromStorage, getMetricHistory } from '@/utils/utils';
import Message from '@/components/Message';
import { FlatList } from 'react-native';
import { MetricHistory } from '@/interfaces/models';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryMetrics() {
   const [history, setHistory] = useState<MetricHistory[]>([]);
   const router = useRouter();
   
   useEffect(() => {
      const fetchHistory = async () => {
         const storedHistory = await getMetricHistory();
         setHistory(storedHistory);
      };

      fetchHistory();

      
   }, []);

   const onPress = () => {
      router.push("/metricAnalysisForm");
   };

   const onDelete = async (id: string) => {
      setHistory(metrics => {
         return metrics.filter( metric => metric.id != id)
      })
      await deleteMetricFromStorage(id)
   }

   return (
      <SafeContainer>
         {history.length !== 0
            ? (
               <View style={{ flex: 1 }}>
                  <FlatList
                     data={history}
                     renderItem={({ item }) => <CardHistory onDelete={() => onDelete(item.id)} metricHistory={item} />}
                     ItemSeparatorComponent={() => <View style={styles.separator} />}
                  />
                  <ButtonActionBotton icon="plus" onClick={onPress} />
               </View>
            )
            : <Message title='Oh oh, aquí no hay nada' paraf='Aún no tienes análisis. Realiza uno para comenzar.' onClick={onPress} />}
      </SafeContainer>
   );
}

const styles = StyleSheet.create({
   separator: {
      height: 20
   },
});


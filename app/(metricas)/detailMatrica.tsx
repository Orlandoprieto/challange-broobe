import { StyleSheet, Image, Platform, View, Dimensions, ScrollView } from 'react-native';
import SafeContainer from '@/components/SafeContainer';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useThemeColor } from '@/hooks/useThemeColor';
import analitysFetch from '@/services/analisysFetch';
import { MetricHistory } from '@/interfaces/models';
import Grafics from '@/components/Grafics';

export default function TabTwoScreen() {
  const [metricHistory, setMetricHistory] = useState<MetricHistory | null>(null)
  const url = useLocalSearchParams()
  const theme = useThemeColor()
  const [showLoader, setShowLoader] = useState<boolean>(true)

  useEffect(() => {
    const json = JSON.stringify(url)
    const data = JSON.parse(json) as { url: string }
    console.log(data.url)
    analitysFetch(data.url)
      .then(data => {
        const metrics = data as MetricHistory
        setMetricHistory(metrics)
      })
      .catch(error => {
        const err = error as Error
        console.error(err.message)
      })
      .finally(() => {
        setShowLoader(false)
      })
  }, [])


  return (
    <SafeContainer>
      {metricHistory ? (
        <ScrollView>
          <View style={{ gap: 20 }}>
            {Object.keys(metricHistory.lighthouseResult.categories).map((categoryKey, index) => {
              const category = metricHistory.lighthouseResult.categories[categoryKey]["auditRefs"];

              if (category) {
                return (
                  <Grafics key={index} data={category} title={categoryKey} />
                );
              } else {
                return null;
              }
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size={50} color={theme.colorPrimary}/>
        </View>
      )}
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

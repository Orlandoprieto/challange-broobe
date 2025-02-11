import { StyleSheet, View, ScrollView } from 'react-native';
import SafeContainer from '@/components/SafeContainer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState, useId } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useThemeColor } from '@/hooks/useThemeColor';
import analitysFetch from '@/services/analisysFetch';
import { Category, MetricHistory } from '@/interfaces/models';
import Grafics from '@/components/Grafics';
import ButtonActionBotton from '@/components/ui/ButtonActionBotton';
import { saveMetricToStorage } from '@/utils/utils'
import Message from '@/components/Message';

export default function TabTwoScreen() {
  const [metricHistory, setMetricHistory] = useState<MetricHistory | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const url = useLocalSearchParams();
  const theme = useThemeColor();
  const router = useRouter()

  useEffect(() => {
    if (!url) return;

    const json = JSON.stringify(url);
    const data = JSON.parse(json) as { url: string };

    analitysFetch(data.url)
      .then((data) => {
        setMetricHistory(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [url]);

  const handleSave = async () => {
    if (metricHistory) {
      await saveMetricToStorage(metricHistory);
      router.push("/");
    }
  };

  if (showLoader) {
    return (
      <SafeContainer>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={50} color={theme.colorPrimary} />
        </View>
      </SafeContainer>
    );
  }

  if (error) {
    return (
      <Message
        title="Error al obtener las métricas"
        paraf='Por favor, verifica tu conexión e intenta nuevamente. Si el problema persiste, contacta al soporte.'
      />
    );
  }

  return (
    <SafeContainer>
      <ScrollView>
        <View style={styles.contentContainer}>
          {metricHistory.categories &&
            Object.keys(metricHistory.categories).map((categoryKey) => {
              const category = metricHistory.categories[categoryKey] as Category;
              return category && (
                <Grafics key={categoryKey} data={category.auditRefs} title={category.title} />
              )
            })}
        </View>
      </ScrollView>
      <ButtonActionBotton icon="content-save" onClick={handleSave} />
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  contentContainer: {
    gap: 20,
  },
});

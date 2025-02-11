import { IData, IField } from "@/interfaces/interfaces";
import BuildConfig from "@/config/BuildConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MetricHistory } from '@/interfaces/models';

const STORAGE_KEY = 'metric_history'

export function addParamsToURL(data: IData): string {
   let url = BuildConfig.BASE_URL;
   url += `?key=${BuildConfig.API_KEY}`;
   if (data.categorias?.length) {
      url += data.categorias.map(categoria => `&category=${categoria}`).join("");
   }
   if (data.url) {
      url += `&url=${data.url}`;
   }
   if (data.estrategia) {
      url += `&strategy=${data.estrategia}`;
   }
   return url;
}

export const saveMetricToStorage = async (newMetric: MetricHistory) => {
   try {
      const metrics = await getMetricHistory()
      const newId = newMetric.id + Math.random() / 1000
      const updatedMetrics = [...metrics, {...newMetric, id: newId}];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMetrics));
      console.log('Métrica guardada correctamente');
   } catch (error) {
      console.error('Error guardando la métrica en AsyncStorage:', error);
   }
};

export const getMetricHistory = async (): Promise<MetricHistory[]> => {
   try {
      const storedMetrics = await AsyncStorage.getItem(STORAGE_KEY);
      return storedMetrics ? JSON.parse(storedMetrics) : [];
   } catch (error) {
      console.error('Error obteniendo datos:', error);
      return [];
   }
};

export const deleteMetricFromStorage = async (metricId: string) => {
   try {
      const metrics = await getMetricHistory()
      const updatedMetrics = metrics.filter((metric) => metric.id !== metricId);

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMetrics));
      console.log('Métrica eliminada correctamente');
   } catch (error) {
      console.error('Error eliminando la métrica:', error);
   }
};

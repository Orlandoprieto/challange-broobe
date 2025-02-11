import { MetricHistory } from '@/interfaces/models';
import axios from 'axios'
import { CATEGORYS } from '@/constants/const';

export default async function analitysFetch(url: string) {
   try {
      const response = await axios.get(url);
      const data = response.data;

      const metricHistory = {
         id: data["id"],
         categories: {}
      }

      CATEGORYS.forEach(category => {
         metricHistory.categories[category] = data["lighthouseResult"]["categories"][category]
      })

      return metricHistory as MetricHistory
   } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
   }
}
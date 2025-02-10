import axios from 'axios'

export default async function analitysFetch(url: string) {
   try {
      const response = await axios.get(url);
      return response.data;
   } catch(error) {
      console.error("Error fetching data:", error);
      throw error;
   }
}
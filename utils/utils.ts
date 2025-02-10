import { IData, IField } from "@/interfaces/interfaces";
import BuildConfig from "@/config/BuildConfig";

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

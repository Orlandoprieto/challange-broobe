import { z } from "zod";

export const formMetricsValidation = z.object({
   url: z.string().url({ message: "Debes ingregar una URL válida" }),
   categorias: z.array(z.string()).nonempty({ message: "Debes seleccionar al menos una categoría" })
});




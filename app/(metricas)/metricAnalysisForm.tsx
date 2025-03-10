import { ScrollView, View } from 'react-native';
import SafeContainer from '@/components/SafeContainer';
import { Text } from '@/components/ThemedText';
import Button from '@/components/ui/Button';
import RadiusCheck from '@/components/ui/RadiusCheck';
import CheckBoxGroup from '@/components/ui/CheckBoxGroup';
import Input from '@/components/ui/Input';
import Form from '@/components/form/Form.';
import { useRouter } from 'expo-router';
import { addParamsToURL } from '@/utils/utils';
import { formMetricsValidation } from '@/validations/formMetricsSearchs';
import { useState } from 'react';
import { ZodError } from 'zod';

export default function TabTwoScreen() {
   const [errorMessage, setErrorsMessage] = useState<string>()
   const router = useRouter()

   const makeAnalisys = (data) => {
      const resultado = formMetricsValidation.safeParse(data);
   
      if (!resultado.success) {
         const errors = resultado.error as ZodError;
         const errorMessages = errors.errors.map(err => err.message).join("\n");
         setErrorsMessage(errorMessages);
         return;
      }

      router.push({
         pathname: '/detailMatrica',
         params: {
            url: addParamsToURL(data)
         }
      });
   };
   

   return (
      <SafeContainer>
         <ScrollView>
            <Form
               render={({ data, handleChange }) => (
                  <View style={{ gap: 30 }}>
                     <Text type='title'>Nuevo análisis</Text>
                     <View>
                        <Input field='url' onChange={handleChange} />
                     </View>

                     <View style={{ gap: 10 }}>
                        <Text type='defaultSemiBold'>Selecciona categoria de metricas</Text>
                        <CheckBoxGroup onChange={handleChange} field='categorias' dataSource={[{ label: "Accesibilidad", value: "ACCESSIBILITY" }, { label: "Mejores practicas", value: "BEST_PRACTICES" }, { label: "Performance", value: "PERFORMANCE" }, { label: "PWA", value: "PWA" }, { label: "SEO", value: "SEO" }]} />
                     </View>

                     <View style={{ gap: 10, justifyContent: 'center' }}>
                        <Text type='defaultSemiBold'>Selecciona una estrategia</Text>
                        <RadiusCheck field='estrategia' onChange={handleChange} dataSource={[{ label: "Desktop", value: "DESKTOP" }, { label: "Mobile", value: "MOBILE" }]} />
                     </View>

                     <Button title='Analizar' onPress={() => makeAnalisys(data)} />

                     {(errorMessage != '')
                        && <Text type='error'>{errorMessage}</Text>}

                  </View>
               )}
            />
         </ScrollView>
      </SafeContainer>
   );
}


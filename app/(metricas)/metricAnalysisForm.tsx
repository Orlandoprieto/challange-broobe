import { ScrollView, View } from 'react-native';
import SafeContainer from '@/components/SafeContainer';
import { Text } from '@/components/ThemedText';
import Button from '@/components/ui/Button';
import RadiusCheck from '@/components/ui/RadiusCheck';
import CheckBoxGroup from '@/components/ui/CheckBoxGroup';
import Input from '@/components/ui/Input';
import Form from '@/components/form/Form.';

export default function TabTwoScreen() {
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
                        <CheckBoxGroup onChange={handleChange} field='categorias' dataSource={[{ label: "Accesibilidad", value: "ACCESSIBILITY" }, { label: "Mejores practicas", value: "BEST_PRACTICES" }, { label: "Performance", value: "PERFORMANCE" }, { label: "PWA", value: "PWA," }, { label: "SEO", value: "SEO" }]} />
                     </View>

                     <View style={{ gap: 10, justifyContent: 'center' }}>
                        <Text type='defaultSemiBold'>Selecciona una estrategia</Text>
                        <RadiusCheck field='estrategia' onChange={handleChange} dataSource={[{ label: "Desktop", value: "DESKTOP" }, { label: "Movile", value: "MOVILE" }]} />
                     </View>

                     <Button title='Analizar' onPress={() => console.log(data)} />
                  </View>
               )}
            />
         </ScrollView>
      </SafeContainer>
   );
}


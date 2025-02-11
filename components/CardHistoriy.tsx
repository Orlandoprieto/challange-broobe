import { useThemeColor } from '@/hooks/useThemeColor';
import { MetricHistory } from '@/interfaces/models';
import React from 'react';
import { Linking, Pressable, View } from 'react-native';
import { Text } from './ThemedText';
import Button from './ui/Button';

interface SearchInfoProps {
   metricHistory: MetricHistory
   onDelete?: () => void
}

export default function CardHistory({ metricHistory, onDelete }: SearchInfoProps) {
   const theme = useThemeColor()
   const url = new URL(metricHistory.url)
   return (
      <View style={{ gap: 25, backgroundColor: theme.surface, borderRadius: 10, padding: 20 }}>
         <View style={{ gap: 10 }}>

            <Text type='title'>{url.hostname.split('.')[1]}</Text>
            
            <Pressable onPress={() => Linking.openURL(url.hostname)}>
               <Text type='defaultSemiBold'>{"Url: " + url}</Text>
            </Pressable>

            <Text type='defaultSemiBold'>{"Categorias: " + Object.keys(metricHistory.categories).join(", ")}</Text>
         </View>
         <View style={{ gap: 10, flexDirection: 'row' }}>
            <Button title='Ver' />
            <Button onPress={onDelete} title='Borrar' />
         </View>
      </View>
   );
};

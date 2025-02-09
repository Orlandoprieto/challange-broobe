import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useRouter } from "expo-router";
import { useThemeColor } from '@/hooks/useThemeColor';

export default function ButtonActionBotton() {
   const theme = useThemeColor()
   const router = useRouter();
   return (
      <FAB
         icon="plus"
         color={theme.icon}
         style={[styles.fab, { backgroundColor: theme.colorPrimary }]}
         onPress={() => router.push("/metricAnalysisForm")}
      />
   )
}

const styles = StyleSheet.create({
   fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
   },
})

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useRouter } from "expo-router";

export default function ButtonActionBotton() {
   const router = useRouter();
   return (
      <FAB
         icon="plus"
         style={styles.fab}
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

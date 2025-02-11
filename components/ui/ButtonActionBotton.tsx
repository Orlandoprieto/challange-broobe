import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useRouter } from "expo-router";
import { useThemeColor } from '@/hooks/useThemeColor';

interface ButtonActionBottonProps {
   icon: "plus" | "content-save"
   onClick?: () => void;
}

export default function ButtonActionBotton({icon, onClick }: ButtonActionBottonProps) {
   const theme = useThemeColor()
   return (
      <FAB
         icon={icon}
         color={theme.icon}
         style={[styles.fab, { backgroundColor: theme.colorPrimary }]}
         onPress={onClick}
      />
   )
}

const styles = StyleSheet.create({
   fab: {
      position: 'absolute',
      margin: 16,
      right: 10,
      bottom: 15,
   },
})

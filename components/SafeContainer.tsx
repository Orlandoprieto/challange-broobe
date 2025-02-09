import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeContainerProps {
   children: React.ReactNode
}

export default function SafeContainer({ children }: SafeContainerProps) {
   const theme = useThemeColor()
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
         {children}
      </SafeAreaView>
   )
}
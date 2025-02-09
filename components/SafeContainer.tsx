import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeContainerProps {
   children: React.ReactNode
}

export default function SafeContainer({ children }: SafeContainerProps) {
   const theme = useThemeColor()
   return (
      <PaperProvider>
         <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, paddingHorizontal: 20, paddingTop: 30 }}>
            {children}
         </SafeAreaView>
      </PaperProvider>
   )
}
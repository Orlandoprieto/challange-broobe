import { View } from "react-native";
import { Text } from "./ThemedText";
import Button from "./ui/Button";
import { useThemeColor } from "@/hooks/useThemeColor";

interface MessageProps {
   title: string
   paraf: string
   onClick?: () => void
}

export default function Message({title, paraf, onClick} : MessageProps) {
   const theme = useThemeColor()
   return (
      <View style={{backgroundColor: theme.background, flex: 1, alignItems: "center", justifyContent: "center" }}>
         <View style={{ gap: 25, width: '80%' }}>
            <View style={{ gap: 10, alignItems: "center", justifyContent: "center" }}>
               <Text type="title">{title}</Text>
               <Text>{paraf}</Text>
            </View>
            {onClick && <Button title='Realiza un análisis' onPress={onClick} />}
         </View>
      </View>
   )
}
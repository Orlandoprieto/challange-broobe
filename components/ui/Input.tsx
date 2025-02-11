import { View } from "react-native";
import { Text } from "../ThemedText";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IField } from "@/interfaces/interfaces";


export default function Input({field, onChange}: IField) {
   const [text, setText] = useState("https://www.broobe.com/");
   const theme = useThemeColor()

   const onChangeText = (text: string) => {
      setText(text)
      onChange(field, text)
   }

   useEffect(() => {
      onChangeText(text)
   }, [])
   
   return (
      <View style={{ gap: 10 }}>
         <Text type='defaultSemiBold'>Ingresa la url</Text>
         <TextInput
            textColor={theme.textColorSecondary}
            value={text}
            onChangeText={onChangeText}
            mode='outlined'
            style={{ backgroundColor: 'none' }}
            activeOutlineColor={theme.colorPrimary}
         />
      </View>
   )
}
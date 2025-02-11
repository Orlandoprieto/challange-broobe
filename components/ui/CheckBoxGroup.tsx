import { useThemeColor } from "@/hooks/useThemeColor";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import { ChecksProps } from "./RadiusCheck";
import { IField } from "@/interfaces/interfaces";

export default function CheckBoxGroup({ dataSource, field, onChange }: ChecksProps & IField) {
   const [checkeds, setCheckeds] = useState<string[]>([])
   const theme = useThemeColor()

   useEffect(() => {
      onChange(field, checkeds)
   }, [])

   const onChangeCheckeds = (value: string) => {
      setCheckeds(prev => {
         const newSet = new Set(prev);
         if (newSet.has(value)) {
            newSet.delete(value);
         } else {
            newSet.add(value);
         }

         const result = Array.from(newSet)
         onChange(field, result)
         return result
      });
   }
   return (
      <View>
         {dataSource.map(data => (
            <Checkbox.Item
               key={data.value + "_checkRadius"}
               labelStyle={{ color: theme.textColorSecondary }}
               color={theme.colorPrimary}
               label={data.label}
               status={checkeds.includes(data.value) ? 'checked' : 'unchecked'}
               onPress={() => onChangeCheckeds(data.value)}
            />
         ))}
      </View>
   )
}
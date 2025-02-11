import { useThemeColor } from "@/hooks/useThemeColor"
import { IField } from "@/interfaces/interfaces"
import { useState } from "react"
import { RadioButton } from "react-native-paper"

interface data {
   label: string,
   value: string
}

export interface ChecksProps {
   dataSource: data[]
}

export default function RadiusCheck({ dataSource, field, onChange }: ChecksProps & IField) {
   const [value, setValue] = useState<string>('DESKTOP')
   const theme = useThemeColor()

   const changeValue = (value: string) => {
      setValue(value)
      onChange(field, value)
   } 

   return (
      <RadioButton.Group value={value} onValueChange={changeValue}>
         {dataSource.map(data => {
            return (
               <RadioButton.Item
                  key={data.value + "_check"}
                  labelStyle={{ color: theme.textColorSecondary }}
                  color={theme.colorPrimary}
                  label={data.label}
                  value={data.value}
               />
            )
         })}
      </RadioButton.Group>
   )
}
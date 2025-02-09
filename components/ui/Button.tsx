import { useThemeColor } from '@/hooks/useThemeColor';
import * as React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';


interface Buttonprops {
   title: string
   onPress?: () => void
}

export default function Button({title, onPress}: Buttonprops) {
   const theme = useThemeColor()
   return (
      <ButtonPaper labelStyle={{color: theme.icon}} style={{backgroundColor: theme.colorPrimary}} mode="contained" onPress={onPress}>
         {title}
      </ButtonPaper>
   );
}


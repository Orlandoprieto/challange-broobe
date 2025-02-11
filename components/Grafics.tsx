import { LineChart } from "react-native-chart-kit";
import { Text } from '@/components/ThemedText';
import { Dimensions, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AuditRefs } from "@/interfaces/models";

interface GraficsProps {
   title: string
   data: AuditRefs[]
}

export default function Grafics({ title, data }: GraficsProps) {
   const theme = useThemeColor()
   const weights = data.slice(0, 15).map(item => item.weight);
   const labels = data.map(item => item.id);

   return (
      <View style={{ paddingVertical: 20, backgroundColor: theme.surface, borderRadius: 20, justifyContent: "flex-start", gap: 20 }}>
         <View style={{ paddingHorizontal: 10 }}>
            <Text type="subtitle">{title}</Text>
         </View>
         <LineChart
            data={{
               labels: [],
               datasets: [
                  {
                     data: weights,
                  },
               ],
            }}
            width={Dimensions.get("window").width - 5}
            height={220}
            yAxisInterval={1}
            chartConfig={{
               backgroundGradientFrom: theme.surface,
               backgroundGradientTo: theme.surface,
               color: () => theme.colorPrimary,
               labelColor: () => theme.textColorSecondary,
            }}
            bezier
         />
      </View>
   )
}
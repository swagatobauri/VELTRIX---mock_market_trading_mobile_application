import { formatINR } from "@/utils/formatCurrency";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  balance: number;
  label?: string;
};

export default function PortfolioSummaryCard({
  balance,
  label = "Starting Balance",
}: Props) {
  return (
    <View className="bg-primary rounded-2xl p-5 mb-6 border border-primary-light">
      <Text className="text-on-primary/75 text-sm font-semibold tracking-wide uppercase">
        Virtual Portfolio
      </Text>
      <Text className="text-on-primary text-3xl font-extrabold mt-1">
        ₹{formatINR(balance)}
      </Text>
      <View className="flex-row items-center mt-2">
        <Ionicons name="trending-up" size={16} color="#1E1E24" />
        <Text className="text-on-primary/90 text-sm font-medium ml-1">{label}</Text>
      </View>
    </View>
  );
}

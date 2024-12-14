import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
    },
    content: {
        gap: 5,
        paddingHorizontal: 5,
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginVertical: 5,
    },
})
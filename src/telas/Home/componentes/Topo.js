import React from "react";
import { Image, View, Text } from "react-native";
import logo from "../../../assets/logo.png";

export default function Topo() {
    return <View>
            <Image source={ logo } />
            <Text>Topo</Text>
        </View>
}
import { Dimensions } from "react-native";

const { width: widthDevice, height: heightDevice } = Dimensions.get("window");

export const hp = (percentage) => (percentage * heightDevice) / 100;
export const wp = (percentage) => (percentage * widthDevice) / 100;

import { StyleSheet } from "react-native";

const CheckboxStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginRight:5
  },
  label: {
    marginLeft: 4,
    fontSize: 12,
   
  },
  checkbox: {
    width: 25,
    height: 25
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  smallCheckbox: {
    width: 15,
    height: 15
  },
  checkContainer: {
    flexDirection: "row",
    height: 55,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20
  }
});

export default CheckboxStyles;
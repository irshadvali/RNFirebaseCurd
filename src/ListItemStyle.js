import { StyleSheet } from "react-native";

const ListItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    padding:10,
  },
  titleText:{
      fontSize:16,
      color:"#333",
      fontWeight: 'bold',
  },
  detailsText:{
    fontSize:13,
    color:"#333",
    paddingRight:50,
    marginTop:10
  },
  timeText:{
    fontSize:10,
    color:"#333",
    marginTop:10,
    fontStyle: 'italic',
  },
  divider:{
    height:1,
    backgroundColor:"#999",
    marginTop:10
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
    height: 20,
    alignItems: "center",
  },
  InputStyle: {
    marginTop: 20,
    height: 50,
    width:"100%",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: 3
},

  
});
export default ListItemStyle;
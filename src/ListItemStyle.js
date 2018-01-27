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
  }
  
});
export default ListItemStyle;
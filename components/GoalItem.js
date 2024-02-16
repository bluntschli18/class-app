import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
// import GoalItem from "./GoalItem";

function GoalItem(props) {
  return (
      <View style={styles.goalsSet}>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsSet: {
    margin: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5e0acc",
  },

  

  goalText: {
    color: "white",
    padding: 8,
  },
});

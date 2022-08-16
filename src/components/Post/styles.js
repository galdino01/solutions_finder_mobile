import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#222222'
  },
  postText: {
    color: '#C9C9C9',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#C9C9C9',
  }
});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#C9C9C9'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#7F7F7F'
  },
  userNickName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userData: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: '#7F7F7F'
  },
  label: {
    fontWeight: "bold",
  },
  info: {
    color: '#555eaa',
    fontWeight: "400",
  },
  flatlist: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#7F7F7F'
  },
  userPostsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    height: 30,
    marginBottom: 5,
    borderRadius: 8,
    paddingLeft: 10,
    paddingEnd: 10,
    backgroundColor: '#7F7F7F'
  },
  titleText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  newPostText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  newPost: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#C9C9C9AA'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpArea: {
    width: '100%',
    justifyContent: 'center',
  },
  inputView: {
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  registerTouch: {
    marginTop: 50,
    padding: 5,
    borderRadius: 12,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    backgroundColor: "#C9C9C9",
  },
  cancelTouch: {
    marginTop: 10,
    padding: 5,
    borderRadius: 12,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    backgroundColor: "#222222",
  },
  registerText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#1A1A1A",
  },
  cancelText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#C9C9C9",
  },
  input: {
    width: '80%',
    height: 40,
    marginLeft: 5,
    color: '#C9C9C9',
  },
  title: {
    fontSize: 56,
    marginBottom: 50,
    fontWeight: 'bold',
    color: "#1A1A1A",
  },
  error: {
    color: "#a55a",
  }
});

export default styles;
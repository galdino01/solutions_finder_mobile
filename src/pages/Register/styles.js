import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 772,
    paddingTop: 15,
    paddingBottom: 15,
    paddingStart: 25,
    paddingEnd: 25,
    backgroundColor: "#1A1A1A",
  },
  header: {
    width: 220,
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
  icon: {
    marginTop: 15,
    height: 40,
    padding: 5,
  },
  title: {
    fontSize: 56,
    marginBottom: 50,
    fontWeight: 'bold',
    color: "#C9C9C9",
  },
  error: {
    color: "#a55a",
  }
});

export default styles;
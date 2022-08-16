import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: "#C9C9C9",
  },
  header: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  rocketText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#1A1A1A",
  },
  rocket: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  touch: {
    marginTop: 25,
    padding: 5,
    borderRadius: 12,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#1A1A1A",
    backgroundColor: "#1A1A1A",
  },
  touchText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#C9C9C9",
  },
  textPrimary: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  textSecondary: {
    fontSize: 36,
    fontWeight: "400",
    color: "#1A1A1A",
  },
  image: {
    width: 50,
    height: 50,
  },
  iconOpacityOne: {
    opacity: 0.8,
  },
  iconOpacityTwo: {
    opacity: 0.4,
  },
  image: {
    width: 150,
    height: 150,
  }
});

export default styles;
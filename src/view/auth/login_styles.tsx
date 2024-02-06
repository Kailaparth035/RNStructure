import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: 'stretch',
  },
  rectangleImage: {
    width: '100%', // Takes the full width of the parent
    height: '50%', // Adjust as needed
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
  },
  logoImage: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: 'contain', // or 'cover' based on your preference
  },
});

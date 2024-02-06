import {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

interface CustomTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  suffixIcon?: any; // Adjust the type based on your image source type
  onChangeText: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  onBlur?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  secureTextEntry,
  suffixIcon,
  onChangeText,
  error = false,
  errorMessage = '',
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };
  const borderColor = error ? 'red' : isFocused ? 'black' : '#ccc';

  return (
    <View style={{marginBottom: 0}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: borderColor,
          borderBottomWidth: 1,
          paddingVertical: 2,
        }}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          style={{flex: 1, padding: 0, fontSize: 14}}
        />
        {suffixIcon && (
          <TouchableOpacity onPress={() => console.log('Suffix icon pressed')}>
            <Image
              source={suffixIcon}
              style={{width: 20, height: 20, marginLeft: 10}}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{color: 'red', marginTop: 5}}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;

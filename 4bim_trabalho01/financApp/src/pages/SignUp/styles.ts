// C:/Users/nicol/Desktop/pasta/ifpr/DispositivosMoveis/4Bimestre/financApp/src/pages/SignUp/styles.ts
import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f4f7ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #F0F4FF;
  justify-content: center;
  align-items: center;
`;

export const AreaInput = styled.View`
  width: 60%;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 4px; /* Reduzido para dar espaço à mensagem de erro */
`;

export const ErrorText = styled.Text`
  color: #c62828;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;
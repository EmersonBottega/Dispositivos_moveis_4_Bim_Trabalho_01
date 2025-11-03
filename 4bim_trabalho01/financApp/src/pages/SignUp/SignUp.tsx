import React, { useState, useEffect } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  ErrorText,
} from './styles';

type AuthStackParamList = {
  SignIn: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

export default function SignUp() {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    // Validação do nome
    if (name.trim().length < 3) {
      newErrors.name = 'O nome deve ter no mínimo 3 caracteres.';
      isValid = false;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
      isValid = false;
    }

    // Validação da senha
    if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
      isValid = false;
    }

    // Validação da confirmação de senha
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  };

  // Valida o formulário sempre que um campo muda
  useEffect(() => {
    validateForm();
  }, [name, email, password, confirmPassword]);

  function handleSignUp() {
    if (!isFormValid) return;

    setLoading(true);

    // Simulação de chamada de API
    setTimeout(() => {
      setLoading(false);
      // Navegar para SignIn após sucesso
      navigation.navigate('SignIn');
    }, 2000); //icone "carregando"
  }

  return (
      <Background>
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>

          <AreaInput>
            <Input
                placeholder="Nome Completo"
                autoCorrect={false}
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
                returnKeyType="next"
            />
            {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
            />
            {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
                placeholder="Senha"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                returnKeyType="next"
            />
            {errors.password ? <ErrorText>{errors.password}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
                placeholder="Confirmar Senha"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                returnKeyType="go"
            />
            {errors.confirmPassword ? <ErrorText>{errors.confirmPassword}</ErrorText> : null}
          </AreaInput>

          <SubmitButton
              activeOpacity={0.8}
              onPress={handleSignUp}
              disabled={!isFormValid || loading}
              style={{ opacity: (!isFormValid || loading) ? 0.5 : 1 }}
          >
            {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <SubmitText>Cadastrar</SubmitText>
            )}
          </SubmitButton>
        </Container>
      </Background>
  );
}
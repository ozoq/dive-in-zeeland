import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.mainColor};
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export interface ButtonProps {
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;

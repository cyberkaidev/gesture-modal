import React from 'react';
import { MainContainer } from './styles';
import { GestureModal } from './gesture-modal';
import { Button } from 'react-native';

export function Main() {
  const [visible, setVisible] = React.useState(false)

  return (
    <MainContainer>
      <Button title='Open modal' onPress={() => setVisible(true)} />
      <GestureModal
        title='Você deseja fazer alguma coisa?'
        visible={visible}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </MainContainer>
  )
}
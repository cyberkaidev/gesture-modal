import { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Background, AnimatedCard, Indicator, Modal, TextPrimary, TextSecondary, Touch } from './styles';
import { GestureModalProps } from './types';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

export function GestureModal({ title, visible, onConfirm, onCancel }: GestureModalProps) {
  const HIDE_CARD = 300 * 2
  const SHOW_CARD = 0
  const y = useSharedValue(HIDE_CARD);

  const translateY = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }]
    }
  })

  const eventHandler = useAnimatedGestureHandler({
    onActive: event => {
      if (event.translationY < 0) return;
      y.value = event.translationY
    },
    onEnd: event => {
      if (event.translationY >= 170) {
        y.value = withTiming(
          HIDE_CARD,
          { duration: 300 },
          finished => {
            if (finished) runOnJS(onCancel)()
          }
        )
      } else {
        y.value = withSpring(SHOW_CARD)
      }
    }
  })

  React.useEffect(() => {
    if (visible) y.value = withSpring(SHOW_CARD);
  }, [visible]);

  return (
    <Modal visible={visible} transparent>
      <Background>
        <PanGestureHandler onGestureEvent={eventHandler}>
          <AnimatedCard style={translateY}>
            <Indicator />
            
            <TextPrimary>
              {title}
            </TextPrimary>

            <Touch 
              backgroundColor="#A5AADE"
              onPress={() => {
                y.value = withTiming(
                  HIDE_CARD,
                  { duration: 300 },
                  finished => {
                    if (finished) runOnJS(onConfirm)()
                  }
                )
              }}
            >
              <TextSecondary>
                Confirm
              </TextSecondary>
            </Touch>

            <Touch
              backgroundColor="transparent"
              onPress={() => {
                y.value = withTiming(
                  HIDE_CARD,
                  { duration: 300 },
                  finished => {
                    if (finished) runOnJS(onCancel)()
                  }
                )
              }}
            >
              <TextSecondary>
                Cancel
              </TextSecondary>
            </Touch>
          </AnimatedCard>
        </PanGestureHandler>
      </Background>
    </Modal>
  );
}
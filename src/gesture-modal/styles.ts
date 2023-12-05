import styled from 'styled-components/native'
import { TouchProps } from './types';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const WIDTH_CARD = Dimensions.get('screen').width - 20;

export const Modal = styled.Modal``;

export const Background = styled.SafeAreaView`
	flex: 1;
	background-color: rgba(000, 000, 000, 0.5);
	justify-content: flex-end;
`;

export const AnimatedCard = styled(Animated.View)`
	width: ${WIDTH_CARD}px;
	align-self: center;
	border-radius: 25px;
	padding: 10px 20px;
	background-color: #1F1F1F;
`;

export const TextPrimary = styled.Text`
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 15px;
	text-align: center;
	color: white;
`;

export const Touch = styled.TouchableOpacity<TouchProps>`
	width: 100%;
	padding: 20px 0;
	align-items: center;
	border-radius: 15px;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const TextSecondary = styled.Text`
	color: white;
	font-weight: bold;
`;

export const Indicator = styled.View`
	width: 40px;
	height: 5px;
	margin-bottom: 15px;
	border-radius: 10px;
	align-self: center;
	background-color: grey;
`;
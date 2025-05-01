import { Dimensions } from 'react-native';

export const { width } = Dimensions.get('screen');
export const { height } = Dimensions.get('screen');

const initWidth = 375;
const initHeight = 812;

const maxHeight = height >= initHeight ? initHeight : height;

export const resizeHeight = (val: number) => val * (maxHeight / initHeight);
export const resizeWidth = (val: number) => val * (width / initWidth);

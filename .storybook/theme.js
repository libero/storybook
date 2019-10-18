import { create } from '@storybook/theming';
import theme from './theme.scss';

export default create({
  base: 'light',
  brandTitle: 'Libero Publisher',
  brandUrl: 'https://libero.pub/',
  colorPrimary: theme.colorPrimary,
  colorSecondary: 'rgb(2, 119, 189)',
  appBg: 'rgb(255, 255, 255)',
  appContentBg: 'rgb(255, 255, 255)',
  appBorderColor: 'rgb(224, 224, 224)',
  appBorderRadius: 4,
  textColor: 'rgb(33, 33, 33)',
  textInverseColor: 'rgb(255, 255, 255)',
  barTextColor: 'rgb(136, 136, 136)',
  barSelectedColor: 'rgb(33, 33, 33)',
  barBg: 'rgb(179, 229, 252)',
  inputBg: 'rgb(255, 255, 255)',
  inputBorder: 'rgb(2, 119, 189)',
  inputTextColor: 'rgb(255, 255, 255)',
  inputBorderRadius: 4,
});

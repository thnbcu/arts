import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import nbcu from './nbcutheme';

addons.setConfig({
  theme: themes.dark,
  //theme: nbcu,
});
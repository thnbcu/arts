import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import NBCU from './nbcutheme';

addons.setConfig({
  theme: themes.dark,
});
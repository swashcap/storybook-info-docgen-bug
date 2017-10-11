import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    withInfo({
      header: false,
      inline: true,
      text: 'Sample info block'
    })(
      () => <Button onClick={action('clicked')}>Hello Button</Button>
    )
  );

import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonComponent } from 'ui';
import { number, color, text, withKnobs } from '@storybook/addon-knobs';

const ExampleButton = () => {
  const width = number('Width', 100);
  const height = number('Height', 50);
  const backgroundColor = color('BackgroundColor', '#49F1FF');
  const textColor = color('TextColor', '#FFFFFF');
  const label = text('Label', 'label')

  return <ButtonComponent
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    {label}
  </ButtonComponent>
}

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addParameters({ docs: { disable: true }})
  .add('Button 1', () => <ExampleButton />);
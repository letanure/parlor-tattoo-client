import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'UI/Typography/Button',
  component: Button,
  argTypes: {
    children: { type: 'string', defaultValue: 'My Button' },
    size: { control: { type: 'select' } }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

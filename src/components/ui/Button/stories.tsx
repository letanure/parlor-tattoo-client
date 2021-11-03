import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    children: { type: 'string', defaultValue: 'Button' },
    size: { control: { type: 'select' } },
    action: { control: { type: 'select' } },
    outline: { defaultValue: false }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

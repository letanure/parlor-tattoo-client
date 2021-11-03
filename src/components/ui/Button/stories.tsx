import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    action: { control: { type: 'select' } },
    children: { type: 'string', defaultValue: 'Button' },
    disabled: { defaultValue: false },
    outline: { defaultValue: false },
    size: { control: { type: 'select' } }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

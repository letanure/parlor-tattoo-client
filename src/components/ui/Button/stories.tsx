import { Story, Meta } from '@storybook/react/types-6-0'
import { Lock } from '@styled-icons/octicons'

import Button, { ButtonProps } from '.'

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'My Button',
    disabled: false,
    outline: false,
    fullWidth: false
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  icon: <Lock />
}

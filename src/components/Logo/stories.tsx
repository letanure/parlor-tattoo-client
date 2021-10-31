import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Layout/Logo',
  component: Logo,
  argTypes: {
    color: { control: { type: 'select', options: ['light', 'dark'] } },
    text: { control: 'text' }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Basic = Template.bind({})
Basic.args = {
  color: 'light',
  text: 'Logo'
}

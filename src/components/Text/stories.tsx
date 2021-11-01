import { Story, Meta } from '@storybook/react/types-6-0'

import Text, { TextProps } from '.'

export default {
  title: 'UI/Typography/Text',
  component: Text,
  argTypes: {
    text: { defaultValue: 'Hello World' },
    decoration: { control: { type: 'select' } }
  }
} as Meta

export const Default: Story<TextProps> = (args) => <Text {...args} />

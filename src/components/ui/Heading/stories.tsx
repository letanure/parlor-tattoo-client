import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from '.'

export default {
  title: 'UI/Typography/Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string', defaultValue: 'Heading' },
    lineColor: { control: { type: 'select' } },
    linePosition: { control: { type: 'select' } }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Primary = Template.bind({})
Primary.args = {
  ...Secondary.args,
  primary: true
}

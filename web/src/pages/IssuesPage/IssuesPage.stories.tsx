import type { Meta, StoryObj } from '@storybook/react'

import IssuesPage from './IssuesPage'

const meta: Meta<typeof IssuesPage> = {
  component: IssuesPage,
}

export default meta

type Story = StoryObj<typeof IssuesPage>

export const Primary: Story = {}

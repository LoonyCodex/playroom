import React from 'react'
import { Paragraph } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Paragraph.displayName,
    name: '<p>: Параграф',
    code: render(<Paragraph>Параграф</Paragraph>),
  },
]

export { Paragraph } from '@ProtoSetUI/set-ui'

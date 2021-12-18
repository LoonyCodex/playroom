import React from 'react'
import { LineBreak } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: LineBreak.displayName,
    name: '<br>: Перенос строки',
    code: render(<LineBreak />),
  },
]

export { LineBreak } from '@ProtoSetUI/set-ui'

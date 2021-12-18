import React from 'react'
import { Space, NonBreakable } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Space.displayName,
    name: '<unicode>: Пробел',
    code: render(<Space />),
  },
  {
    group: NonBreakable.displayName,
    name: '<unicode>: Неразрывный пробел',
    code: render(<NonBreakable />),
  },
]

export { Space, NonBreakable } from '@ProtoSetUI/set-ui'

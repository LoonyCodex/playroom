import React from 'react'
import { H4 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H4.displayName,
    name: '<h4>: Заголовок',
    code: render(<H4>Заголовок четвертого уровня</H4>),
  },
]

export { H4 } from '@ProtoSetUI/set-ui'

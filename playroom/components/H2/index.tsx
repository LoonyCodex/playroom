import React from 'react'
import { H2 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H2.displayName,
    name: '<h2>: Заголовок',
    code: render(<H2>Заголовок второго уровня</H2>),
  },
]

export { H2 } from '@ProtoSetUI/set-ui'

import React from 'react'
import { H1 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H1.displayName,
    name: '<h1>: Заголовок',
    code: render(<H1>Заголовок первого уровня</H1>),
  },
]

export { H1 } from '@ProtoSetUI/set-ui'

import React from 'react'
import { H3 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H3.displayName,
    name: '<h3>: Заголовок',
    code: render(<H3>Заголовок третьего уровня</H3>),
  },
]

export { H3 } from '@ProtoSetUI/set-ui'

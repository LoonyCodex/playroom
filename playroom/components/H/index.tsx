import React from 'react'
import { H } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H.displayName,
    name: '<H>:Заголовок Общий',
    code: render(<H level={1}>Заголовок первого уровня</H>),
  },
]

export { H } from '@ProtoSetUI/set-ui'

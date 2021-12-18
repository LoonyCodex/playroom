import React from 'react'
import { H6 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H6.displayName,
    name: '<h6>: Заголовок',
    code: render(<H6>Заголовок шестого уровня</H6>),
  },
]

export { H6 } from '@ProtoSetUI/set-ui'

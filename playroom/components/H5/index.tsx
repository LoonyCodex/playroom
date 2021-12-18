import React from 'react'
import { H5 } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: H5.displayName,
    name: '<h5>: Заголовок',
    code: render(<H5>Заголовок пятого уровня</H5>),
  },
]

export { H5 } from '@ProtoSetUI/set-ui'

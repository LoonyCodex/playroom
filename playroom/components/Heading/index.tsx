import React from 'react'
import { Heading } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Heading.displayName,
    name: '<Heading>:Заголовок бессемантичный',
    code: render(<Heading tag="div" level={1}>Заголовок первого уровня как див</Heading>),
  },
]

export { Heading } from '@ProtoSetUI/set-ui'

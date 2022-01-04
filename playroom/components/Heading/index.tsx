import React from 'react'
import { Heading } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Heading.displayName,
    name: '<Heading>:Заголовок Общий',
    code: render(<Heading level={5}>Заголовок пятого уровня</Heading>),
  },
  {
    group: Heading.displayName,
    name: '<Heading>:Заголовок бессемантичный',
    code: render(<Heading level={1} tag="div">Заголовок первого уровня как див</Heading>),
  },
]

export { Heading } from '@ProtoSetUI/set-ui'

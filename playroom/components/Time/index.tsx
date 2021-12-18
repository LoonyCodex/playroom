import React from 'react'
import { Time } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Time.displayName,
    name: '<time>: Время Дата',
    code: render(<Time>04.12.1995</Time>),
  },
]

export { Time } from '@ProtoSetUI/set-ui'

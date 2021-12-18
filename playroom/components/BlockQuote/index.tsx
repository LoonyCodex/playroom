import React from 'react'
import { BlockQuote } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: BlockQuote.displayName,
    name: '<blockquote>: блок с цитатой',
    code: render(<BlockQuote>Блок с цитатой</BlockQuote>),
  },
]

export { BlockQuote } from '@ProtoSetUI/set-ui'

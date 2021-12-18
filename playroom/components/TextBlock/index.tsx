import React from 'react'
import { TextBlock } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: TextBlock.displayName,
    name: '<div>: блочный текст',
    code: render(<TextBlock>Блок текста</TextBlock>),
  },
]

export { TextBlock } from '@ProtoSetUI/set-ui'

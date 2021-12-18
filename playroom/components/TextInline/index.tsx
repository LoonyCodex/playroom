import React from 'react'
import { TextInline } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: TextInline.displayName,
    name: '<span>: Текст строчный',
    code: render(<TextInline>Текст строчный</TextInline>),
  },
]

export { TextInline } from '@ProtoSetUI/set-ui'

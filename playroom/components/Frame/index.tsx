import React from 'react'
import { Frame, H1, Paragraph } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Frame.displayName,
    name: '<Frame>',
    code: render(
      <Frame>
        <H1>Заголовок первого уровня</H1>
        <Paragraph>Многострочный текст</Paragraph>
      </Frame>
    ),
  },
]

export { Frame } from '@ProtoSetUI/set-ui'

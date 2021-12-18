import React from 'react'
import { UnorderedList, TextInline, Important } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: UnorderedList.displayName,
    name: '<ul>: Ненумерованный список',
    code: render(
      <UnorderedList>
        <TextInline>
          Пункт 1 <Important>очень важная часть</Important>
        </TextInline>
        <TextInline>Пункт 2</TextInline>
      </UnorderedList>
    ),
  },
]

export { UnorderedList } from '@ProtoSetUI/set-ui'

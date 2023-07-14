import { FC, PropsWithChildren, ReactNode } from 'react';
import { H1 } from './h1';
import { H2 } from './h2';
import { H3 } from './h3';
import { H4 } from './h4';
import { Normal } from './normal';
import { TextWithLineBreaks } from './text-with-line-breaks';

export type SpanProps = {
  text?: string;
  marks?: string[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'quote';
};

const textMap = new Map(
  Object.entries({
    normal: Normal,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
  }),
);

const strong = (text: ReactNode) => <strong>{text}</strong>;
const em = (text: ReactNode) => <em>{text}</em>;

export const Span: FC<PropsWithChildren<SpanProps>> = ({ text, style, marks, children }) => {
  console.log('text: ', text);
  const textNode = text && <TextWithLineBreaks text={text} />;

  const Text = textMap.get(style) || Normal;

  const isStrong = marks?.includes('strong');
  const isEm = marks?.includes('em');

  const strongText = isStrong ? strong(textNode) : textNode;
  const emText = isEm ? em(strongText) : strongText;

  return <Text>{emText}</Text>;
};

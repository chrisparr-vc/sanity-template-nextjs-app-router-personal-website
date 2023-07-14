import { FC, Fragment, PropsWithChildren } from 'react';

export type TextWithLineBreaksProps = {
  text: string;
};

export const TextWithLineBreaks: FC<PropsWithChildren<TextWithLineBreaksProps>> = ({ text }) => {
  const lines = text.split('\n');
  console.log('lines: ', lines);
  return (
    <>
      {text === '' ? (
        <br />
      ) : (
        <>
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {lines.length > 1 && <br />}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

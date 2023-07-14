import { numericOptions } from './numeric-options';

export const marginRightField = {
  name: 'marginRight',
  title: 'Margin Right',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const marginLeftField = {
  name: 'marginLeft',
  title: 'Margin Left',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const marginTopField = {
  name: 'marginTop',
  title: 'Margin Top',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const marginBottomField = {
  name: 'marginBottom',
  title: 'Margin Bottom',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const marginXFields = [marginLeftField, marginRightField];

export const marginYFields = [marginTopField, marginBottomField];

export const marginFields = [...marginXFields, ...marginYFields];

export const paddingRightField = {
  name: 'paddingRight',
  title: 'Padding Right',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const paddingLeftField = {
  name: 'paddingLeft',
  title: 'Padding Left',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const paddingTopField = {
  name: 'paddingTop',
  title: 'Padding Top',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const paddingBottomField = {
  name: 'paddingBottom',
  title: 'Padding Bottom',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const paddingXFields = [paddingLeftField, paddingRightField];

export const paddingYFields = [paddingTopField, paddingBottomField];

export const paddingFields = [...paddingXFields, ...paddingYFields];

export const spaceXField = {
  name: 'spaceX',
  title: 'Space X',
  type: 'string',
  description: 'Horizontal space between items',
  options: {
    list: [...numericOptions],
  },
};

export const spaceYField = {
  name: 'spaceY',
  title: 'Space Y',
  description: 'Vertical space between items',
  type: 'string',
  options: {
    list: [...numericOptions],
  },
};

export const spaceFields = [spaceXField, spaceYField];

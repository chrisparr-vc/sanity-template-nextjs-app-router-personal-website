export const borderOptions = [
  { title: 'none', value: '0' },
  { title: '1px', value: '1' },
  { title: '2px', value: '2' },
  { title: '3px', value: '3' },
  { title: '4px', value: '4' },
  { title: '5px', value: '5' },
  { title: '6px', value: '6' },
];
export const borderField = {
  name: 'border',
  title: 'Border',
  type: 'string',
  options: {
    list: [...borderOptions],
  },
};

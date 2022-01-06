export const inputTypeConst = [
  'text',
  'number'
] as const

export type InputTypeConst = 'text' | 'number';

export type InputType = typeof inputTypeConst[number];
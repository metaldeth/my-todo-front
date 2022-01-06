export const inputTypeConst = [
  'text',
  'number'
] as const

export type InputType = typeof inputTypeConst[number];
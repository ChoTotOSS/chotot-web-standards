import safeRegex from 'safe-regex';

export const MESSAGE_ID = 'no-unsafe-regex';
export const messages = {
  [MESSAGE_ID]: 'Unsafe regular expression.',
};

export function isUnsafeLiteral(regexLiteral: any): boolean {
  return !safeRegex(regexLiteral?.value);
}

export function isUnsafePattern(pattern: string, flags: string): boolean {
  return !safeRegex(`/${pattern}/${flags}`);
}



export const MESSAGE_ID = 'emptyCatch';
export const messages = {
  [MESSAGE_ID]: 'Empty catch block is not allowed.. Please do something with the error.',
};

export function isEmptyCatchBody(node: any): boolean {
  return node?.body?.body?.length === 0;
}



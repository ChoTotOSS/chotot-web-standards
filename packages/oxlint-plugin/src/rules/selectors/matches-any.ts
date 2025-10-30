export function matches(selectors: string[]) {
  switch (selectors.length) {
    case 0:
      return '';
    case 1:
      return selectors[0];
    default:
      return `:matches(${selectors.join(', ')})`;
  }
}



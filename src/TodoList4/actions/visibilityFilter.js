export const VISIBILITY_FILTER = "VISIBILITY_FILTER";
export const ALL = 'ALL';
export const FINISH = 'FINISH';
export const UNFINISH = 'UNFINISH';

export function visibilityFilter(item) {
  return { type: VISIBILITY_FILTER, item};
}
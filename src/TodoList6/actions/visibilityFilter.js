/** action */
export const ALL = 'ALL';
export const FINISH = 'FINISH';
export const UNFINISH = 'UNFINISH';

export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';

export const visibilityFilter = payload => ({
  type: VISIBILITY_FILTER, payload
});

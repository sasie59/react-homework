/** status */
export const ALL = 'ALL';
export const FINISH = 'FINISH';
export const UNFINISH = 'UNFINISH';

/** types */
export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';

export const visibilityFilter = payload => {
  return {
    type: VISIBILITY_FILTER,
    payload
  };
};

export const aaa = ppp => {
  return ppp;
};
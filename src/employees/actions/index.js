import * as actions from './types';

export const setEmployees = (page, pageSize) => ({
  type: actions.EMPLOYEES_SET,
  page,
  pageSize,
});

export const setFilter = filter => ({
  type: actions.FILTER_SET,
  filter,
});

export const setCursor = cursor => ({
  type: actions.CURSOR_SET,
  cursor,
});

export const setCurrentPage = currentPage => ({
  type: actions.CURRENT_PAGE_SET,
  currentPage,
});

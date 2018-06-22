// return list of all City of Chicago employees
export const getEmployees = (page, pageSize) => (
  `https://dt-interviews.appspot.com/?per_page=${pageSize};page=${page}`
);

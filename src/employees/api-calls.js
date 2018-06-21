// return list of all City of Chicago employees
export const requestEmployees = (page, per_page) => (
  `https://dt-interviews.appspot.com/?per_page=${per_page};page=${page}`
);

export const paginate = <T>(
  items: Array<T>,
  pageSize: number,
  pageNumber: number
): Array<T> => {
  return [...items].splice((pageNumber - 1) * pageSize, pageSize);
};

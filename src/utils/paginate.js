export default function paginate(items, pageSize, pageNumber) {
  return [...items].splice((pageNumber - 1) * pageSize, pageSize);
}

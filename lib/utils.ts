// This method is simple and works well for plain objects that do not contain
// functions or special types like Date, Set, Map,...
export function deepCopy<T>(obj: T): T {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}

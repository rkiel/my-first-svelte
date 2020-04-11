import trim from "lodash/trim";
import concat from "lodash/concat";
import sortBy from "lodash/sortBy";

export function append(items, textValue) {
  const value = trim(textValue);
  if (value.length > 0) {
    return sortBy(concat(items, { description: value }), ["description"]);
  } else {
    return items;
  }
}

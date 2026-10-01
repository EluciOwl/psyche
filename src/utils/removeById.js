export function remove(idToRemove, setValue) {
  setValue((prev) => prev.filter((item) => item.id !== idToRemove));
}

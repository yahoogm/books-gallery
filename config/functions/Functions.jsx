export const modifiedName = (names) => {
  const modifiedName = names?.map((name, idx) => {
    if (idx !== names.length - 1) {
      return name + ',' + ' ';
    }
    return name;
  });
  return modifiedName;
};

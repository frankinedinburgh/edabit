/*
 * @return boolean
 */
function validName(name) {
  const nameArray = name.match(/\S+/g);
  const initials = name.match(/\b\p{Lu}\./gu);

  for (let key in initials) {
    if (initials[key] === nameArray[key] && nameArray.length !== 3) {
      return true;
    } else if (
      nameArray.length === 3 &&
      nameArray.findIndex((name) => initials.includes(name)) > 0
      // initials[key] === nameArray[nameArray.length - 1]
    ) {
      return false;
    }
  }

  if (!initials && name.includes(".")) {
    return false;
  }

  if (
    nameArray?.length === 3 &&
    nameArray?.findIndex((d) => initials.includes(d))
  ) {
    return false;
  }

  if (
    initials.length === 1 &&
    nameArray.findIndex((name) => name.endsWith(".")) > 0
  ) {
    return false;
  }

  return (
    [2, 3].includes(nameArray.length) &&
    nameArray.every((word) => word.length > 1) &&
    nameArray.every((name) => /^[A-Z]+/.test(name[0]))
  );
}

module.exports = validName;

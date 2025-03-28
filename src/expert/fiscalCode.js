const months = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};

function fiscalCode({ name, surname, gender, dob }) {
  const consonants = surname.match(/[bcdfghjklmnpqrstvwxyz]/gi).splice(0, 3);

  const vowels = surname.match(/[aeiou]/gi).splice(0, 3);

  let SUR;

  return consonants;

  switch (consonants.length) {
    case 0:
      SUR = `${vowels[0]}${vowels[1]}${vowels[2]}`;
      break;
    case 1:
      SUR = `${consonants[0]}${vowels[0]}${vowels[1]}`;
      break;
    case 2:
      SUR = `${consonants[0]}${consonants[1]}${vowels[0]}`;
      break;
    case 3:
      SUR = `${consonants[0]}${consonants[1]}${consonants[2]}`;
      break;
  }
  return SUR.toUpperCase();
}

const demo = fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900",
}); // "DBTMTT00A01"

const demo2 = fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950",
}); // "YUXHLN50T41"

const demo3 = fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928",
}); // "MSOMKY28A16"

console.log({ demo: demo2 });

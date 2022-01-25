const names = new Set(["Jack", "Jill", "Jake", "Jack", "Sarah"]);
console.log(names.size);

names.add("Kate").add("Kara");
console.log(names);

for (const name of names) {
  console.log(name);
}

names.forEach((name) => console.log(name));

[...names]
  .filter((name) => name.startsWith("J"))
  .map((name) => name.toUpperCase())
  .forEach((name) => console.log(name));

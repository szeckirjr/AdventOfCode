export const parseElfInput = (elfsRaw: string) => {
  console.log(elfsRaw);

  const elfGroups = elfsRaw.split("\n\n");

  console.log(elfGroups);

  const parsedElfGroups = elfGroups.map((elfGroup) => {
    const parsedElfGroup = elfGroup.split("\n").map((elf) => parseInt(elf));
    return parsedElfGroup;
  });

  console.log(parsedElfGroups);

  // Filter out empty lines
  const filtered = parsedElfGroups.map((elf) => {
    return elf.filter((item) => {
      return !isNaN(item);
    });
  });

  return filtered;
};

// export const getMaxCaloriesBroughtBySingleElf = (input: string) => {
//   if (!input || input === "") return 0;
//   console.log("input", input);

//   const elfs = parseElfInput(input);

//   console.log("elfs", elfs);
//   // Find the elf with the most calories brought in total (sum of all items)
//   const maxCalories = Math.max(
//     ...elfs.map((elf) => elf.reduce((a, b) => a + b))
//   );

//   console.log("maxCalories", maxCalories);

//   return maxCalories;
// };

export const getMaxCaloriesBrought = (input: string, n: number) => {
  if (!input || input === "") return 0;
  console.log("input", input);

  const elfs = parseElfInput(input);

  const elfCalories = elfs.map((elf) => elf.reduce((a, b) => a + b));

  // Sort the elves by the amount of calories they bring
  const sortedElfCalories = elfCalories.sort((a, b) => b - a);

  // Return the sum of the top n elves
  const maxCalories = sortedElfCalories.slice(0, n).reduce((a, b) => a + b);

  console.log("maxCalories", maxCalories);

  return maxCalories;
};

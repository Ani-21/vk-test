const uniqueMutationKeys = new Set();

export const makeUniqueMutation = (key: string, mutationFn: any) => {
  if (!uniqueMutationKeys.has(key)) {
    uniqueMutationKeys.add(key);
    return mutationFn(key);
  } else {
    return Promise.resolve();
  }
};

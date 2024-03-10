export const fetchAgeByName = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

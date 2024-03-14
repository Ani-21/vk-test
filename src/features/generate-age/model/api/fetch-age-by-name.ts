import { AgeResponse } from "src/entities/age";

export const fetchAgeByName = async (name: string): Promise<AgeResponse> => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

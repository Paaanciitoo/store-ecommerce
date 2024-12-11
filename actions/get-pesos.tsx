import { Pesos } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/pesos`;

const getPesos = async (): Promise<Pesos[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getPesos;

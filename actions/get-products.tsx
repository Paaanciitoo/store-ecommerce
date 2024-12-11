import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productos`;

interface Query {
  categoriasId?: string;
  coloresId?: string;
  pesosId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      coloresId: query.coloresId,
      pesosId: query.pesosId,
      categoriasId: query.categoriasId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error al obtener los productos: ${res.status}`);
  }

  return res.json();
};

export default getProducts;
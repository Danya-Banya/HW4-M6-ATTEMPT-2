import { useQuery } from "@tanstack/react-query";

import { $api } from "../../api/api";
const getByProductDetails = async (product) => {
  const response = await $api.get(`/products/${product}`);
  return response.data;
};
export const useProductDetails = (slug) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => getByProductDetails(slug),
    enabled: !!slug,
  });
};

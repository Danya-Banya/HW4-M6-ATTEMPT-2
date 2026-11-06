import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";
const getByProductsList = async () => {
  const response = await $api.get("/products/");
  return response.data;
};
export const useProductsList = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getByProductsList,
  });
};

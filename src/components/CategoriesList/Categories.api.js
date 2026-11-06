import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

const getByCategoryProducts = async (category) => {
  const response = await $api.get(`/products/category/${category}`);
  return response.data;
};

const groupByCategory = (products) => {
  const groups = {};
  for (const product of products) {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    console.log(product);
  }
  const result = [];
  for (const name in groups) {
    result.push({ name, items: groups[name] });
  }
  return result;
};

export const usePaginationCategory = (category, page, pageSize) => {
  const loadData = async () => {
    const results = await getByCategoryProducts(category);
    return results;
  };
  const selectPage = (all) => {
    const start = (page - 1) * pageSize;
    const itemsSize = all.slice(start, start + pageSize);
    return {
      groups: groupByCategory(itemsSize),
      totalPages: Math.max(1, Math.ceil(all.length / pageSize)),
    };
  };
  return useQuery({
    queryKey: ["products", category || "all"],
    queryFn: loadData,
    placeholderData: keepPreviousData,
    select: selectPage,
  });
};

export const useCategoriesList = (slug) => {
  return useQuery({
    queryKey: ["products", "categories", slug],
    queryFn: () => getByCategoryProducts(slug),
    enabled: !!slug,
  });
};

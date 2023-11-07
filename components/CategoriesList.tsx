import { TCategory } from "@/types";
import Link from "next/link";

const getCategories = async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.baseUrl}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const CategoriesList = async () => {
  const categoriesData = await getCategories();
  return (
    <>
      <div className="flex gap-2 text-sm flex-wrap">
        {categoriesData &&
          categoriesData.map((item) => (
            <Link
              className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
              key={item.id}
              href={`/categories/${item.catName}`}
            >
              {item.catName}
            </Link>
          ))}
      </div>
    </>
  );
};

export default CategoriesList;

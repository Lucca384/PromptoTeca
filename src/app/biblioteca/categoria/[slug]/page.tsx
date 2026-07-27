import CategoryPageClient from './CategoryPageClient';
import { getAllCategories } from '@/data/categories';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.flatMap((category) => [
    { slug: category.slug },
    ...(category.subcategories?.map((sub) => ({ slug: sub.slug })) || []),
  ]);
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryPageClient key={params.slug} slug={params.slug} />;
}

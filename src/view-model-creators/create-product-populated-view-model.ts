import { ProductPopulatedDocument } from '../models/product-model';
import { ProductViewModel } from './create-product-view-model';

export type ProductPopulatedViewModel = Omit<ProductViewModel, 'categoryIds'> & {
  categories: string[],
};

const createProductPopulatedViewModel = (
  productPopulatedDoc: ProductPopulatedDocument,
): ProductPopulatedViewModel => ({
  id: productPopulatedDoc._id.toString(),
  title: productPopulatedDoc.title,
  price: productPopulatedDoc.price,
  info: productPopulatedDoc.info,
  about: productPopulatedDoc.about,
  updatedAt: productPopulatedDoc.updatedAt,
  categories: productPopulatedDoc.categories.map((categoryDoc) => categoryDoc.title),
  img: productPopulatedDoc.img,
});

export default createProductPopulatedViewModel;

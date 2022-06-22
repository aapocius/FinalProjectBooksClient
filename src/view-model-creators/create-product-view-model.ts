import { ProductDocument } from '../models/product-model';

export type ProductViewModel = {
  id: string,
  title: string,
  price: number,
  info: string,
  about: string,
  updatedAt: string,
  categoryIds: string[],
  img: string[],
};

const createProductViewModel = (productDoc: ProductDocument): ProductViewModel => ({
  id: productDoc._id.toString(),
  title: productDoc.title,
  price: productDoc.price,
  info: productDoc.info,
  about: productDoc.about,
  updatedAt: productDoc.updatedAt,
  categoryIds: productDoc.categories.map((categoryId) => categoryId.toString()),
  img: productDoc.img,
});

export default createProductViewModel;

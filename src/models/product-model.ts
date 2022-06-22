import {
  Schema,
  Types,
  Document,
  Model,
  model,
} from 'mongoose';
import { CategoryDocument } from './category-model';

export type Product = {
  info: string,
  title: string,
  about: string,
  price: number,
  categories: Types.ObjectId[],
  img: string[],
  createdAt: string,
  updatedAt: string,
};

export type ProductProps = Omit<Product, 'createdAt' | 'updatedAt' | 'categories'> & {
  categories?: string[],
};

export type ProductDocument = Document<
  Types.ObjectId,
  unknown,
  Product
> & Product & {
  _id: Types.ObjectId;
};

export type ProductPopulatedDocument = Omit<ProductDocument, 'categories'> & {
  categories: CategoryDocument[]
};

const productSchema = new Schema<Product, Model<Product>>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
   about: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
    default: [],
  },
  categories: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  },
}, {
  timestamps: true,
});

const ProductModel = model('Product', productSchema);

export default ProductModel;

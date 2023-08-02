import mongoose from 'mongoose'

interface Product {
  id: string;
  name: string;
  brand: string;
  quality: number;
  category: string;
  typ: string;
  color: string;
  productionYear: string;
  countryOfOrigin: string;
  img?: any;
  price: number;
}

const productSchema = new mongoose.Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  brand:{ type: String, required: true },
  quality: { type: Number, required: true },
  category: { type: String, required: true },
  typ: { type: String, required: true },
  color:{ type: String, required: true },
  productionYear: { type: String, required: true },
  countryOfOrigin: { type: String, required: true },
  img:{ type: mongoose.Schema.Types.Mixed},
  price: { type: Number, required: true },
})

const ProductModel = mongoose.model<Product>('Product', productSchema)

export default ProductModel

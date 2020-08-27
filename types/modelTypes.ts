export interface ICategory {
  id: number;
  name: string;
  imgUrl: string;
  SubCategories?: ISubcategory[];
  Products?: IProduct[];
}

export interface ISubcategory {
  id: number;
  name: string;
  categoryId?: number;
  Products?: IProduct[];
}

export interface IProduct {
  id: number;
  subcategoryId: number;
  thumbImgUrl: string;
  mainImgUrl: string;
  description: string;
  price: number;
  discount: number;
  name: string;
  maxQuantity: number;
  stock: number;
}

export interface IOrder {
  userId: number;
  orderId: number;
  lastUpdated: string;
  count: number;
  product: IProduct;
}

export interface IDib {
  id: number;
  productId: number;
}


export interface IUser {
  id: number;
  name: string;
  email?: string;
}

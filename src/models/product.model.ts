export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: DetailCategory;
	images: string[];
}

interface DetailCategory {
	id: number,
	name: string,
	typeImg: string
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
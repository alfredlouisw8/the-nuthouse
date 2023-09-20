export type ImageSource = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};

export type CategoryType = {
	_id: string;
	title: string;
	image: ImageSource;
};

export type ProductType = {
	_id: string;
	title: string;
	image: ImageSource;
	brand: string;
	info: string;
	shopee: string;
	tokopedia: string;
	blibli: string;
};

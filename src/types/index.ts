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
	price: number;
	info: string;
	shopee: string;
	tokopedia: string;
	blibli: string;
};

export type ThumbnailType = {
	_id: string;
	title: string;
	description: string;
	image1: ImageSource;
	image2: ImageSource;
	image3: ImageSource;
};

export type CategoryTypeWithEmptyArray = (
	| CategoryType
	| {
			_id: string;
			title: string;
	  }
)[];

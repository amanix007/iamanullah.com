import { IImage } from '@types';

export interface ICompany {
	country: string;
	city: string;
	location: string;
	name: string;
	url: string;
	logo: string;
}

export interface IRawCompany {
	name: string;
	url: string;
	logo: IImage;
}

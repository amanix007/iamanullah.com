import { ICompany, IRawCompany } from '@types';

export interface IEducation {
	institute: ICompany;
	course: string;
	date: string;
	technologies: string[];
	area: any;
}

export interface IRawEducation {
	course: string;
	date: string;
	institute: IRawCompany;
	courseContents: Array<{ skill: string }>;
}

import { ReactNode } from 'react';
import { ICompany, IRawCompany } from '@types';

export interface IJob {
	company: ICompany;
	jobTitle: string;
	startDate: string;
	endDate: string | null;
	technologies: string[];
	summary: string[];
	location: string;
}

export interface IRawJob {
	name: IRawCompany;
	company: IRawCompany;
	jobTitle: string;
	startDate: string;
	endDate: string | null;
	skills: Array<{ skill: string }>;
	summary: string[];
}

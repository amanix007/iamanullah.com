import { RichTextContent } from '@graphcms/rich-text-types';
import { ICompany, IRawCompany } from '@types';

export interface IJob {
	name: ICompany;
	company: ICompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	techStack: string[];
	description: RichTextContent;
}

export interface IRawJob {
	name: IRawCompany;
	company: IRawCompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	skills: Array<{ skill: string }>;
	description: {
		raw: RichTextContent;
	};
}

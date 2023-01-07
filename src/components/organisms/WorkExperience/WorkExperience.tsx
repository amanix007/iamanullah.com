import { IJob } from '@types';

import classNames from 'classnames';
import { RichText } from '@graphcms/rich-text-react-renderer';

import { Job } from 'Molecules/Job';
import { mdxComponents } from 'Utils/mdxComponents';

export interface WorkExperienceProps {
	jobs: IJob[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	return (
		<>
			{jobs.map(
				(
					{ company, jobTitle, startDate, endDate, technologies, summary },
					index
				) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={`${company.name} ${jobTitle}`}
					>
						<Job
							company={company}
							jobTitle={jobTitle}
							startDate={startDate}
							endDate={endDate}
							technologies={technologies}
						>
							<ul className="list-disc ml-4 mt-4">
								{summary.map((text) => (
									<li className="mt-1" key={text}>
										{text}
									</li>
								))}
							</ul>
							{/* <RichText renderers={mdxComponents} content={summary} /> */}
						</Job>
					</div>
				)
			)}
		</>
	);
};

export { WorkExperience };

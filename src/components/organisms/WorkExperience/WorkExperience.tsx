import { IJob } from '@types';

import classNames from 'classnames';

import { Job } from 'Molecules/Job';

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
							summary={summary}
						/>
					</div>
				)
			)}
		</>
	);
};

export { WorkExperience };

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
					{ name, position, startDate, endDate, highlights, summary },
					index
				) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={`${name} ${position}`}
					>
						<Job
							company={name}
							jobTitle={position}
							fromDate={startDate}
							toDate={endDate}
							technologies={highlights}
						>
							<RichText renderers={mdxComponents} content={summary} />
						</Job>
					</div>
				)
			)}
		</>
	);
};

export { WorkExperience };

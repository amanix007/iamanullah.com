import classNames from 'classnames';
import { IEducation } from '@types';

import { School } from 'Molecules/School';

export interface EducationProps {
	education: IEducation[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<>
			{education.map(
				({ area, startDate,endDate, institute, technologies }, index: number) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={area}
					>
						<School
							course={area}
							date={`${startDate}`}
							institute={institute}
							technologies={[]}
						/>
					</div>
				)
			)}
		</>
	);
};

export { Education };

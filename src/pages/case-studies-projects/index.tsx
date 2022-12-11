/* eslint-disable sort-imports */
import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { ICaseStudy } from '@types';
import { mapCaseStudies } from 'Utils/mappings/mapCaseStudies';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { CaseStudy } from 'Molecules/CaseStudy';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import data from '../../data/Aman_Ullah.resume';
interface IProps {
	caseStudies: ICaseStudy[];
}

export const CaseStudiesPage: NextPage<IProps> = ({ caseStudies }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Software Engineering Case Studies – Aman Ullah"
				description={`Here you can find ${caseStudies.length} case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.`}
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Case Studies/Projects
				</h1>
				{data.projects.map((caseStudy, i) => (
					<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
				))}
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	// const { data } = await client.query({
	// 	query: gql`
	// 		query CaseStudiesQuery {
	// 			caseStudies(orderBy: updatedAt_DESC) {
	// 				id
	// 				title
	// 				slug
	// 				seoDescription
	// 				client {
	// 					name
	// 					logo {
	// 						url
	// 					}
	// 				}
	// 				content {
	// 					raw
	// 				}
	// 				technologies {
	// 					skill
	// 				}
	// 				primaryImage {
	// 					url
	// 				}
	// 				secondaryImages {
	// 					url
	// 				}
	// 			}
	// 		}
	// 	`,
	// });

	return {
		props: {
			caseStudies: [],
		},
	};
}

export default CaseStudiesPage;

/* eslint-disable sort-imports */
import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

import LogoCypress from 'Public/assets/tools/cypress.svg';
import LogoFigma from 'Public/assets/tools/figma.svg';
import LogoGraphql from 'Public/assets/tools/graphql.svg';
import LogoHygraph from 'Public/assets/tools/hygraph.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoReact from 'Public/assets/tools/reactjs.svg';
import LogoWebpack from 'Public/assets/tools/webpack.svg';
import LogoPrismic from 'Public/assets/tools/prismic.svg';
import LogoStorybook from 'Public/assets/tools/storybook.svg';
import LogoTurboPack from 'Public/assets/tools/turbopack.svg';
import LogoTurboRepo from 'Public/assets/tools/turborepo.svg';
import LogoSvelte from 'Public/assets/tools/svelte.svg';
import LogoVercel from 'Public/assets/tools/vercel.svg';
import data from '../data/aman_ullah_resume_data';
import { WorkExperience } from 'Organisms/WorkExperience';
import { IJob } from '@types';
import { NextPage } from 'next';
import { Button } from 'Atoms/Button';
import { Icon } from 'Atoms/Icon';

interface IProps {
	jobs: IJob[];
}

const IndexPage: NextPage<IProps> = ({ jobs }) => {
	return (
		<AnimatePage>
			<SeoHead
				title={data.textContent.homePage.title}
				description={data.textContent.shortDescription.site}
				keywords={data.textContent.homePage.keywords}
			/>
			<section id="home" className="h-full">
				<Container>
					<h1
						className="headline mt-20 text-3xl md:text-5xl lg:text-6xl"
						dangerouslySetInnerHTML={
							{ __html: data.textContent.introduction.site } as any
						}
					></h1>
					<p className="my-8 text-lg">
						<span
							className="my-8 text-lg"
							dangerouslySetInnerHTML={
								{ __html: data.textContent.shortDescription.site } as any
							}
						></span>{' '}
						<Typed
							loop
							typeSpeed={80}
							backSpeed={20}
							strings={data.textContent.talkAbout}
							smartBackspace
							backDelay={1000}
							loopCount={0}
							showCursor
							cursorChar="|"
						/>
						.
					</p>
					{/* <p>
						P.S. this website is open-source and available on{' '}
						<a
							href="https://github.com/@amanullah8225/portfolio"
							title="Link to Github repository"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							Github
						</a>
						.
					</p> */}
				</Container>
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoReact className="w-20" aria-label="React.js" />
						<LogoNext className="w-32" aria-label="Next.js" />
						{/* <LogoSvelte className="w-12" aria-label="SvelteKit" /> */}
						{/* <LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" /> */}
						{/* <LogoPrismic className="w-32 md:w-40" aria-label="Prismic" /> */}
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoWebpack className="w-48 md:w-40" aria-label="Webpack" />
						{/* <LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" /> */}
						{/* <LogoVercel className="w-32 md:w-36" aria-label="Vercel" /> */}
						<LogoTurboPack className="w-60 md:w-60" aria-label="Turbo Pack" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoTurboRepo className="w-60 md:w-60" aria-label="Turbo Repo" />
						{/* <LogoCypress className="w-32 md:w-40" aria-label="Cypress" /> */}
					</div>
				</Container>
			</section>

			<section>
				<Container>
					<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
						Experience
					</h1>

					<WorkExperience jobs={jobs} />
				</Container>
			</section>

			<section id="services">
				<Container>
					{/* <h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						{data.servicesIprovide.title}
					</h2>
					<p className="font-bold text-xl md:text-2xl mt-2">
						{data.servicesIprovide.subTitle}
					</p>
					{data.servicesIprovide.serviceList.map((service) => {
						return (
							<div className="service-type" key={service.serviceName}>
								<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
									{service.serviceName}
								</h3>
								<p className="text-xl mt-4 md:text-xl lg:text-2xl">
									{service.serviceSummary}
								</p>
								{service.serviceDescription.map((d) => (
									<p className="mt-4 mb-4 text-lg leading-7" key={d}>
										{d}
									</p>
								))}
							</div>
						);
					})} */}

					<div className="flex justify-center mt-8">
						<Button
							href="mailto:amanullah8225@gmail.com"
							download={true}
							className="group flex gap-2 whitespace-nowrap mr-4"
						>
							{/* <div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
								<Icon icon="DOWNLOAD" />
							</div> */}
							<div className="block headline group-hover:text-off-white">
								Contact Me
							</div>
						</Button>
						<span> </span>
						<Button
							href="/Aman Ullah-7-Year-Resume.pdf"
							download={true}
							className="group flex gap-2 whitespace-nowrap"
						>
							<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
								<Icon icon="DOWNLOAD" />
							</div>
							<div className="block headline group-hover:text-off-white">
								Download my CV
							</div>
						</Button>
					</div>
					{/* 
					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Software Consultancy
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I find the right tech stack for your project, scale your team and
						work with you every step of the way.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I love working with startups and established businesses to find the
						right tech stack, be it a single new feature or a whole rebuild of
						your current product. I can help you find the perfect developers for
						your project and scale up as your business grows.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						When it comes to application development, I&apos;ve seen it all.
						From building highly customised enterprise software stacks on the
						latest open source frameworks to reducing costs and improving user
						experience with cloud-based solutions.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I offer consulting services for companies and agencies that strive
						to develop scalable and performant web solutions. Deeply knowing my
						customers&apos; needs, I can help them make the right decision when
						it comes to deciding on a software architecture and tech stack.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Code Audit
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I make sure your code is accessible, scalable and performs well.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Code Auditing is the process of auditing software code for
						accessibility, scalability and performance. My expertise includes
						assisting in developing best practices for secure coding, finding
						bugs and defects in a system, recommending best practices for
						scalability and performance.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Nobody likes software projects to fail. But there are some common
						mistakes that developers make, that can cause software projects to
						underperform or even crash. And these issues aren&apos;t always the
						fault of a developer, but sometimes the code itself is just bad or
						outdated. I&apos;ve been auditing the code of projects for
						compliance and performance for years and enjoy working with
						companies of all sizes to help them scale.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Website & App Development
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I build web applications and websites that are well-designed,
						accessible, and performant.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I&apos;ve been building websites and apps for over 15 years now,
						working with clients from startups to large enterprise businesses. I
						like to focus on accessibility, performance, and clean code.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As a web and mobile development consultant, I help my clients create
						the best possible digital products for their businesses. I
						don&apos;t just develop websites and apps, I make them beautiful,
						fast and accessible to people with disabilities. My goal is to work
						with you to help you reach your full potential.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Accessibility Audit
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I audit your website or app for accessibility, identify problems,
						and help you fix them.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Looking for an experienced accessibility auditor? I&apos;ll help you
						identify issues, prioritise them for resolution, provide
						recommendations on how to fix them and keep your site compliant. See
						some examples of my work below.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I audit existing websites and apps for accessibility, which helps
						determine how they can be improved to meet WCAG best practices. My
						auditing process includes a detailed methodology and reporting. An
						accessibility audit is recommended before launching new products or
						major updates to existing websites and apps.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As an accessibility auditor, I audit existing websites and apps for
						accessibility. I shed light on why things are inaccessible, and help
						change that. What you&apos;ll gain is a better understanding of how
						users with disabilities interact with your product, what traits make
						for effective interfaces for people with disabilities and insight in
						how to design these interfaces going forward.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						E-Commerce
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I know how to help you sell more, with less effort.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						E-commerce development is my trade. I have years of experience
						working across different industries in B2B and B2C e-commerce
						development. Whether you&apos;re looking to create an MVP or start a
						new project, I can help you achieve financial goals through
						performant microservice architecture and modern JavaScript
						frontends.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I can help you design, develop and deploy modern frontend
						applications built with a microservice architecture. With years of
						experience working across different industries in B2B and B2C
						e-commerce development, I can help you achieve financial goals
						through performant frontends built in React, Redux and GraphQL.
					</p> */}
				</Container>
			</section>
		</AnimatePage>
	);
};

export default IndexPage;

export async function getStaticProps() {
	return {
		props: {
			jobs: data.work,
		},
	};
}

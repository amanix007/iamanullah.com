import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mdxComponents } from 'Utils/mdxComponents';
import { NextPage } from 'next';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	markdown: RichTextContent;
}

const UsesPage: NextPage<IProps> = ({ markdown }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Aman Ullah uses ..."
				description="This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">Uses</h1>
				{/* <RichText content={markdown} renderers={mdxComponents} /> */}

				<p className="mt-4 mb-4 text-lg leading-7">
					This is a list of tech equipment I currently use for my day-to-day
					work as a software engineer. With the pandemic and a shift to working
					fully remotely, I have upgraded a lot of my equipment in 2020 and
					2021.
				</p>
				<h2>put a image of your desk here !!!!!</h2>
				<h3 className="headline text-2xl mt-8">Computer &amp; Hardware</h3>
				<ul className="list-disc ml-4 mt-4">
					<li className="mt-1">
						<a
							href="https://amzn.to/3ySbHP2"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Macbook Pro 16"</strong>
						</a>{' '}
						(M1 Max, 32 GB Ram, 2TB storage)
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3uGdfbs"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Apple Magic Keyboard 2</strong>
						</a>{' '}
						in space grey
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3c6al9k"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Apple Magic Trackpad 2</strong>
						</a>{' '}
						in space grey
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3fxf7Pr"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>LG 34WN80C-B</strong>
						</a>{' '}
						34" ultra-wide monitor, connected via USB-C
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/2RWN1nP"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Invision MX450</strong>
						</a>{' '}
						monitor arm
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3uDzFu3"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Rain Design mStand</strong>
						</a>
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3vGlCFa"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>iPhone 13 Pro</strong>
						</a>{' '}
						(256 GB)
					</li>
					<li className="mt-1">
						<strong />
						<a
							href="https://www.apple.com/uk/shop/buy-ipad/ipad-mini"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>iPad Mini</strong>
						</a>
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3wCC35E"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Bose 700</strong>
						</a>{' '}
						headphones
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/2R889al"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Apple AirPods Pro</strong>
						</a>{' '}
						for on-the-go
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3ux8DnT"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Nest Wifi</strong>
						</a>{' '}
						Mesh Network
					</li>
					<li className="mt-1">
						<a
							href="https://store.google.com/product/google_home"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Google Home</strong>
						</a>{' '}
						to manage my smart home
					</li>
					<li className="mt-1">
						<a
							href="https://amzn.to/3vBBSHy"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Tonor Q9</strong>
						</a>{' '}
						Condenser Microphone
					</li>
					<li className="mt-1">
						<a
							href="https://www.gostand.co.uk/collections/dual-motor-desks/products/the-advance"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>GoStand Advance S2</strong>
						</a>{' '}
						standing desk
					</li>
				</ul>
				<h3 className="headline text-2xl mt-8">Development Tools</h3>
				<ul className="list-disc ml-4 mt-4">
					<li className="mt-1">
						<a
							href="https://code.visualstudio.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>VS Code</strong>
						</a>{' '}
						with the{' '}
						<a
							href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Night Owl</strong>
						</a>{' '}
						theme and{' '}
						<a
							href="https://www.typography.com/fonts/operator/styles/operatormono"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Operator Mono</strong>
						</a>{' '}
						font
					</li>
					<li className="mt-1">
						<a
							href="https://www.warp.dev/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Warp</strong>
						</a>{' '}
						Terminal
					</li>
					<li className="mt-1">
						<a
							href="https://www.sourcetreeapp.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Sourcetree</strong>
						</a>{' '}
						for version control beyond the command line
					</li>
					<li className="mt-1">
						<a
							href="https://insomnia.rest/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Insomnia</strong>
						</a>{' '}
						to test REST and GraphQL API's
					</li>
				</ul>
				<h3 className="headline text-2xl mt-8">Design Tools</h3>
				<ul className="list-disc ml-4 mt-4">
					<li className="mt-1">
						<a
							href="https://www.sketch.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Sketch</strong>
						</a>
					</li>
					<li className="mt-1">
						<a
							href="https://www.figma.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Figma</strong>
						</a>
					</li>
					<li className="mt-1">
						<a
							href="https://affinity.serif.com/en-gb/photo/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Affinity Photo</strong>
						</a>
						,{' '}
						<a
							href="https://affinity.serif.com/en-gb/designer/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Affinity Designer</strong>
						</a>
						,{' '}
						<a
							href="https://affinity.serif.com/en-gb/publisher/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Affinity Publisher</strong>
						</a>
					</li>
				</ul>
				<h3 className="headline text-2xl mt-8">Productivity Tools</h3>
				<ul className="list-disc ml-4 mt-4">
					<li className="mt-1">
						<a
							href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Notion</strong>
						</a>{' '}
						for notes and to-do lists
					</li>
					<li className="mt-1">
						<a
							href="https://www.atlassian.com/software/jira"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Jira</strong>
						</a>{' '}
						for project management
					</li>
					<li className="mt-1">
						<a
							href="https://slack.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Slack</strong>
						</a>{' '}
						for communication
					</li>
					<li className="mt-1">
						<a
							href="https://workspace.google.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Google Workspace</strong>
						</a>{' '}
						for email, calendars and Google Drive
					</li>
				</ul>
				<h3 className="headline text-2xl mt-8">Various other software</h3>
				<ul className="list-disc ml-4 mt-4">
					<li className="mt-1">
						<a
							href="https://brave.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Brave browser</strong>
						</a>{' '}
						has replaced Google Chrome for me
					</li>
					<li className="mt-1">
						<a
							href="https://1password.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>1Password</strong>
						</a>{' '}
						as my password manager
					</li>
					<li className="mt-1">
						<a
							href="https://www.backblaze.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Backblaze</strong>
						</a>{' '}
						for constant backups of my machines
					</li>
					<li className="mt-1">
						<a
							href="https://www.raycast.com/"
							target="_blank"
							className="underlined relative"
							rel="noopener noreferrer"
						>
							<strong>Raycast</strong>
						</a>{' '}
						as an all-round productivity tool
					</li>
				</ul>
				<p className="mt-4 mb-4 text-lg leading-7" />
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	// const { data } = await client.query({
	// 	query: gql`
	// 		query UsesPageQuery {
	// 			page(where: { slug: "uses" }) {
	// 				content {
	// 					raw
	// 				}
	// 			}
	// 		}
	// 	`,
	// });

	return {
		props: {
			// markdown: data.page.content.raw,
		},
	};
}

export default UsesPage;

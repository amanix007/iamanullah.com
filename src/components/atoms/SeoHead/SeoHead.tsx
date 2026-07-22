import Head from 'next/head';
import aman_ullah_resume_data, {
	site_owner_name,
} from 'src/data/aman_ullah_resume_data';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead = ({
	title,
	description,
	author = site_owner_name,
	keywords,
	image = 'https://iamanullah.com/assets/aman-ullah-og.jpg',
	meta,
}: HeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://iamanullah.com/" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta property="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords.join(', ')} />}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"iamanullah.com","alternateName":"Aman Ullah","url":"https://iamanullah.com/","description":"${aman_ullah_resume_data.textContent.homePage.description}","image":"${image}"}`,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: aman_ullah_resume_data.basics.name,
						url: 'https://iamanullah.com/',
						image,
						jobTitle: aman_ullah_resume_data.basics.label,
						description: aman_ullah_resume_data.basics.summary,
						address: {
							'@type': 'PostalAddress',
							addressLocality: aman_ullah_resume_data.basics.location.address,
							addressCountry:
								aman_ullah_resume_data.basics.location.countryCode,
						},
						sameAs: aman_ullah_resume_data.basics.profiles.map(
							(profile) => profile.url
						),
					}),
				}}
			/>
		</Head>
	);
};

export { SeoHead };

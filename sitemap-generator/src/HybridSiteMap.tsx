import React, { useState } from "react";
import { X, Info } from "lucide-react";

interface Feature {
	id: string;
	name: string;
	description: string;
	details: string;
	type: "internal" | "external";
	recommendedTool?: string;
	integrationPossibilities?: string[];
}

const features: Feature[] = [
	{
		id: "home",
		name: "Home Page",
		description: "Central landing page for the Decentralized AI Hub.",
		details:
			"Provides an overview of the hub and quick access to all main features.",
		type: "internal",
	},
	{
		id: "profiles",
		name: "User Profiles",
		description: "Manage and view user profiles within the community.",
		details:
			"Essential for creating a sense of community and facilitating connections. Allows users to showcase their expertise and interests. Serves as a foundation for future features like collaboration matching.",
		type: "internal",
	},
	{
		id: "resources",
		name: "Resource Library",
		description: "Central repository for documents, papers, and tools.",
		details:
			"Provides immediate value to visitors and encourages return visits. Can be easily expanded over time with user contributions.",
		type: "internal",
	},
	{
		id: "events",
		name: "Event Calendar",
		description: "Track and manage community events and meetups.",
		details:
			"Keeps the community informed about relevant workshops, conferences, and meetups. Encourages engagement and networking. Can include both hub-hosted events and external events.",
		type: "internal",
	},
	{
		id: "news",
		name: "News & Updates",
		description: "Latest developments and announcements in decentralized AI.",
		details:
			"Keeps the site dynamic with fresh content. Provides a platform for sharing important developments in decentralized AI. Can start as a simple blog and evolve into a more comprehensive news section.",
		type: "internal",
	},
	{
		id: "external",
		name: "External Resources",
		description: "Links to external platforms and tools.",
		details:
			"Curated list of links to external platforms and tools (e.g., Discord for discussions, GitHub for projects). Serves as a navigation hub for the decentralized ecosystem. Easy to update and expand as you add more external integrations.",
		type: "internal",
	},
	{
		id: "search",
		name: "Search Features",
		description: "Find relevant information across the hub.",
		details:
			"Allows users to quickly find relevant resources, events, and profiles. Enhances user experience and the overall usefulness of the site. Can be expanded later to include more advanced filtering and sorting options.",
		type: "internal",
	},
	{
		id: "contact",
		name: "Contact & Feedback",
		description: "Communication channel for users and administrators.",
		details:
			"Provides a direct line of communication between users and hub administrators. Essential for gathering user feedback and continuously improving the platform. Can also serve as a starting point for those interested in partnerships or collaborations.",
		type: "internal",
	},
	{
		id: "forum",
		name: "Community Forum",
		description: "External platform for community discussions.",
		details:
			"Hosted on an external platform like Discord or Discourse. Enables in-depth discussions and community engagement.",
		type: "external",
		recommendedTool: "Discord",
		integrationPossibilities: [
			"Use Discord's API to display recent discussions on the main site",
			"Create a bot for cross-posting updates between the main site and Discord",
			"Implement a Discord widget on the main site showing active users or recent messages",
		],
	},
	{
		id: "projects",
		name: "Project Collaboration",
		description: "Platform for collaborative AI projects.",
		details:
			"Links to external platforms like GitHub for actual project collaboration. May include an internal project showcase or directory.",
		type: "external",
		recommendedTool: "GitHub",
		integrationPossibilities: [
			"Use GitHub's API to display recent project activities on the main site",
			"Implement a project showcase on the main site, pulling data from GitHub repositories",
			"Create a bot for cross-posting updates between GitHub and the main site",
		],
	},
	{
		id: "funding",
		name: "Funding Opportunities",
		description: "Information on grants and investments for AI projects.",
		details:
			"Curated list of funding opportunities for decentralized AI projects. May start as an internal list and potentially move to a more robust external platform as the community grows.",
		type: "external",
		recommendedTool: "Airtable",
		integrationPossibilities: [
			"Use Airtable's API to display current funding opportunities on the main site",
			"Create a submission form on the main site that pushes data to Airtable",
			"Set up automations to post new opportunities to Discord or the main site's news section",
		],
	},
];

interface FeatureProps {
	feature: Feature;
	x: number;
	y: number;
	onClick: (feature: Feature) => void;
}

const Feature: React.FC<FeatureProps> = ({ feature, x, y, onClick }) => (
	<g onClick={() => onClick(feature)} style={{ cursor: "pointer" }}>
		<circle
			cx={x}
			cy={y}
			r={40}
			fill={feature.type === "internal" ? "#3498db" : "#e74c3c"}
			stroke={feature.id === "home" ? "#2c3e50" : "none"}
			strokeWidth={3}
		/>
		<text
			x={x}
			y={y}
			textAnchor="middle"
			fill="white"
			fontSize={12}
			dy=".3em"
			textLength={80}
			lengthAdjust="spacingAndGlyphs"
		>
			{feature.name}
		</text>
		{feature.type === "external" && (
			<text
				x={x}
				y={y + 15}
				textAnchor="middle"
				fill="white"
				fontSize={10}
				dy=".3em"
			>
				({feature.recommendedTool})
			</text>
		)}
	</g>
);

interface DetailPanelProps {
	feature: Feature;
	onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ feature, onClose }) => (
	<div className="fixed inset-y-0 right-0 w-1/3 bg-white shadow-lg p-6 overflow-y-auto">
		<button onClick={onClose} className="absolute top-4 right-4">
			<X size={24} />
		</button>
		<h2 className="text-2xl font-bold mb-4">{feature.name}</h2>
		<p className="mb-4">{feature.description}</p>
		<p className="mb-4">
			<strong>Type:</strong>{" "}
			{feature.type.charAt(0).toUpperCase() + feature.type.slice(1)}
		</p>
		<h3 className="text-xl font-semibold mb-2">Details:</h3>
		<p className="mb-4">{feature.details}</p>
		{feature.type === "external" && (
			<>
				<h3 className="text-xl font-semibold mb-2">Recommended Tool:</h3>
				<p className="mb-4">{feature.recommendedTool}</p>
				<h3 className="text-xl font-semibold mb-2">
					Integration Possibilities:
				</h3>
				<ul className="list-disc list-inside mb-4">
					{feature.integrationPossibilities?.map((possibility, index) => (
						<li key={index}>{possibility}</li>
					))}
				</ul>
			</>
		)}
	</div>
);

const Legend: React.FC = () => (
	<g transform="translate(20, 20)">
		<circle cx={10} cy={10} r={10} fill="#3498db" />
		<text x={25} y={15} fontSize={12}>
			Internal Feature
		</text>
		<circle cx={10} cy={40} r={10} fill="#e74c3c" />
		<text x={25} y={45} fontSize={12}>
			External Feature (with recommended tool)
		</text>
	</g>
);

export const HybridSitemap: React.FC = () => {
	const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
	const [showInfo, setShowInfo] = useState<boolean>(false);

	return (
		<div className="relative w-full min-h-screen bg-gray-100 overflow-auto p-4 flex justify-center items-center">
			<svg width="800" height="600" viewBox="0 0 800 600">
				<Legend />
				<Feature
					feature={features[0]}
					x={400}
					y={100}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[1]}
					x={200}
					y={250}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[2]}
					x={400}
					y={250}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[3]}
					x={600}
					y={250}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[4]}
					x={100}
					y={400}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[5]}
					x={300}
					y={400}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[6]}
					x={500}
					y={400}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[7]}
					x={700}
					y={400}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[8]}
					x={200}
					y={550}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[9]}
					x={400}
					y={550}
					onClick={setSelectedFeature}
				/>
				<Feature
					feature={features[10]}
					x={600}
					y={550}
					onClick={setSelectedFeature}
				/>

				<line
					x1={400}
					y1={140}
					x2={200}
					y2={210}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={140}
					x2={400}
					y2={210}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={140}
					x2={600}
					y2={210}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={200}
					y1={290}
					x2={100}
					y2={360}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={290}
					x2={300}
					y2={360}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={290}
					x2={500}
					y2={360}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={600}
					y1={290}
					x2={700}
					y2={360}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={290}
					x2={200}
					y2={510}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={290}
					x2={400}
					y2={510}
					stroke="#3498db"
					strokeWidth={2}
				/>
				<line
					x1={400}
					y1={290}
					x2={600}
					y2={510}
					stroke="#3498db"
					strokeWidth={2}
				/>
			</svg>

			{selectedFeature && (
				<DetailPanel
					feature={selectedFeature}
					onClose={() => setSelectedFeature(null)}
				/>
			)}

			<button
				className="fixed top-4 left-4 bg-gray-200 p-2 rounded-full"
				onClick={() => setShowInfo(!showInfo)}
				disabled={selectedFeature !== null}
			>
				<Info size={24} />
			</button>

			{showInfo && selectedFeature === null && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
					<div className="bg-white p-6 rounded-lg max-w-2xl m-4">
						<h2 className="text-2xl font-bold mb-4">How to Use This Sitemap</h2>
						<p className="mb-4">
							This interactive sitemap provides an overview of the Decentralized
							AI Hub's features:
						</p>
						<ul className="list-disc list-inside mb-4">
							<li>
								Blue nodes represent internal features hosted directly on the
								hub.
							</li>
							<li>
								Red nodes represent external features or integrations, with
								their recommended tools displayed.
							</li>
							<li>
								Click on any node to view more details about that feature,
								including integration possibilities for external features.
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

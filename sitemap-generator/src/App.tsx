import React from "react";
import { HybridSitemap } from "./HybridSiteMap";

const App: React.FC = () => {
	return (
		<div className="flex h-screen w-full">
			<div className="w-2/3 overflow-auto">
				<HybridSitemap />
			</div>
			<div className="w-1/3 bg-gray-100 p-4 overflow-auto">
				<h2 className="text-2xl font-bold mb-4">GenAI Possibilities</h2>
				<div className="space-y-6">
					<section>
						<h3 className="text-xl font-semibold mb-2">
							Content Generation and Curation
						</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>
								Automated summarization of research papers and articles in the
								Resource Library
							</li>
							<li>
								AI-powered content recommendations based on user profiles and
								browsing history
							</li>
							<li>
								Generating draft news articles or blog posts for the News &
								Updates section
							</li>
							<li>Creating personalized newsletters for users</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Natural Language Search
						</h3>
						<p>
							Implement an AI-powered natural language search interface for more
							intuitive querying across all resources
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">Chatbot Assistant</h3>
						<p>
							A GenAI-powered chatbot to help users navigate the hub, answer
							questions, and provide quick access to relevant resources
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">Project Matching</h3>
						<p>
							Use AI to analyze user profiles and project descriptions to
							suggest potential collaborations or team formations
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Automated Tagging and Categorization
						</h3>
						<p>
							Use AI to automatically tag and categorize resources, events, and
							external links for better organization and searchability
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Intelligent Event Recommendations
						</h3>
						<p>
							Suggest relevant events to users based on their interests, past
							attendance, and profile information
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							AI-Enhanced User Profiles
						</h3>
						<p>
							Generate personalized skill graphs or knowledge maps for users
							based on their contributions and interactions on the platform
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Trend Analysis and Forecasting
						</h3>
						<p>
							Use AI to analyze discussions, projects, and resources to identify
							emerging trends in decentralized AI
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Code Analysis and Suggestion
						</h3>
						<p>
							For the Project Collaboration feature, implement AI-powered code
							review and suggestion tools
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							AI-Driven Funding Matches
						</h3>
						<p>
							Analyze projects and available funding opportunities to suggest
							potential matches
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Automated Translation
						</h3>
						<p>
							Provide real-time translation of content to make the hub more
							accessible to a global audience
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
						<p>
							Analyze feedback and forum discussions to gauge community
							sentiment and identify areas for improvement
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">Anomaly Detection</h3>
						<p>
							Use AI to detect unusual patterns in user behavior or content
							submissions that might indicate spam or security issues
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							Dynamic Resource Linking
						</h3>
						<p>
							Automatically suggest related resources, discussions, or projects
							based on the content a user is currently viewing
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-2">
							AI-Powered Collaboration Tools
						</h3>
						<p>
							Implement AI-enhanced tools for real-time collaboration, such as
							smart document editing or AI-assisted brainstorming sessions
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default App;

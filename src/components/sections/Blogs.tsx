"use client";
import React from "react";
import Image from "next/image";

const blogPosts = [
	{
		id: 1,
		image: "/wisker_sample.png",
		title: "How Wisker Works",
		description: "Discover the features and benefits of using Wisker for your business.",
		url: "/blog/how-wisker-works"
	},
	{
		id: 2,
		image: "/Wisker.png",
		title: "Getting Started",
		description: "A quick guide to help you get started with Wisker in minutes.",
		url: "/blog/getting-started"
	},
	{
		id: 3,
		image: "/wisker_mockup.png",
		title: "Customer Success Stories",
		description: "Read how our customers are achieving success with Wisker.",
		url: "/blog/customer-success-stories"
	}
];

const Blogs = () => {
	return (
			<section className="py-12 bg-[#f5faff]" id="blogs">
				<h2 className="text-3xl font-extrabold text-center mb-10 text-[#4a90e2] tracking-tight">Latest Blogs</h2>
				<div className="flex flex-wrap justify-center gap-10">
					{blogPosts.map(post => (
						<div
							key={post.id}
							className="transition-transform duration-150 cursor-pointer flex flex-col items-center rounded-3xl border-4 px-8 py-6 min-w-[220px] max-w-[320px] w-[300px] gap-4 bg-white"
							style={{ borderColor: '#5c5c5c', boxShadow: '12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)' }}
							onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
							onMouseLeave={e => (e.currentTarget.style.transform = '')}
						>
							<Image
								src={post.image}
								alt={post.title}
								width={300}
								height={100}
								className="rounded-lg mb-3 object-cover border-2 border-[#b3d1ff] bg-[#e6f0ff]"
								style={{ objectFit: "cover" }}
							/>
							<h3 className="font-bold text-lg text-[#171717] text-left mb-1 w-full">{post.title}</h3>
							<p className="text-gray-700 text-base text-left m-0 mb-4 w-full">{post.description}</p>
							<a
								href={post.url}
								className="font-bold text-[#4a90e2] hover:underline hover:text-[#171717] transition-colors duration-150"
							>
								Read Full Blog
														</a>
													</div>
												))}
											</div>
										</section>
								);
							};
							
							export default Blogs;

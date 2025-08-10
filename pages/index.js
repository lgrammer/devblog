import Link from 'next/link';
import { useState } from 'react';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import dynamic from "next/dynamic";

const PhaserGame = dynamic(() => import("../components/PhaserGame"), {
  ssr: false,
});


export default function Index({ posts, globalData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      
      <main className="w-full">
        
        <div className="w-full flex justify-center">
          <div className="max-w-2xl w-full">
          <div className="flex justify-start gap-1 mb-4">
              <Link href="/browse">
                <button className="py-2 dark:text-white rounded-lg focus:outline-none hover:opacity-50">
               
                  \browse
         
          
                </button>
              </Link>
            </div>
            <ul className="w-full">
              <li
                key={currentPost.filePath}
                className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
                data-sb-object-id={`posts/${currentPost.filePath}`}
              >
                <Link
                  as={`/posts/${currentPost.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                  className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4"
                >
                  {currentPost.data.date && (
                    <p className="mb-3 font-bold uppercase opacity-60" data-sb-field-path="date">
                      {currentPost.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl" data-sb-field-path="title">
                    {currentPost.data.title}
                  </h2>
                  {currentPost.data.description && (
                    <p className="mt-3 text-lg opacity-60" data-sb-field-path="description">
                      {currentPost.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </Link>
              </li>
            </ul>

            <div className="flex justify-start gap-1 mt-4">
              <button
                onClick={prevPost}
                className="py-2 dark:text-white rounded-lg focus:outline-none hover:opacity-50"
              >
                     &lt;
              </button>
              <button
                onClick={nextPost}
                className="px-4 py-2 bg dark:text-white rounded-lg focus:outline-none hover:opacity-50"
              >
           
                  &gt; 
              </button>
              
            </div>
          </div>
          
        </div>
     
          <PhaserGame/>
 
      </main>
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />

    
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

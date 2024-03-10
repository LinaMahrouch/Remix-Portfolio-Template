import { RichText } from '@graphcms/rich-text-react-renderer';
import { LinksFunction, LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';
import React, { useEffect } from 'react'
import { hygraph } from '~/utils/hygraph.server';
import type { PostId } from '~/utils/interface';
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import theme from "prismjs/themes/prism-tomorrow.css?url";
import linenum from "prismjs/plugins/line-numbers/prism-line-numbers.css?url";
interface AppProps {
    post: PostId;
  }
  export const links: LinksFunction = () => [
    { rel: "stylesheet", href: theme },
    { rel: "stylesheet", href: linenum },
  ];
export async function loader({ params }: LoaderFunctionArgs) {
    const query = gql`
          query Posts {
              post(where: {slug: "${params.slug}"}) {
                  id
                  overview
                  publishedAt
                  title
                  slug
                  content {
                    raw
                }
                  
              }
          }
      `;
  
    const post = await hygraph.request(query);
  
    return json({ post });
  }

  const PostSlug = () => {
    const { post } = useLoaderData() as AppProps;

   useEffect(() => {
    Prism.highlightAll();
  }, []);
  

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48">
      <header className="pt-6 xl:pb-6 mt-8">
        <div className="space-y-1 ">
        
          <div className='pb-3'>
            <h1 className="text-2xl font-bold leading-9  text-zinc-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {post.post.title}
            </h1>
          </div>
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 dark:text-teal-700 text-prple-700 text-center">
                {new Date(post.post.publishedAt).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
          <div className="prose max-w-none pt-10 pb-8 dark:prose-invert prose-lg">
            <RichText
              content={post.post.content.raw}
              renderers={{
                code_block: ({ children }) => {
                  return (
                    <pre className="line-numbers language-javascript">
                      <code>{children}</code>
                    </pre>
                  );
                },
                img: ({ src, altText, height, width }) => (
                  <img
                    src={src}
                    alt={altText}
                    width={width}
                    height={height}
                    className="rounded-lg"
                  />
                ),
                a: ({ children, openInNewTab, href, rel, ...rest }) => (
                  //handling the target attribute securely in the link, to avoid security issues
                  <a
                    href={href}
                    target={openInNewTab ? "_blank" : "_self"}
                    rel={openInNewTab ? "noopener noreferrer" : undefined}
                    {...rest}
                    className="text-zinc-200 hover:text-zinc-600"
                  >
                    {children}
                  </a>
                ),
              }}
            />
          </div>
      </div>


    
    </div>
  )
}

export default PostSlug

import Profile from "~/components/Template/Profile";
import Me from "/me.png";

import React from "react";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import type { Post } from "~/utils/interface";

interface AppProps {
  posts: Post;
}

export async function loader({}: LoaderFunctionArgs) {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
  `;
  const posts = await hygraph.request(query);
  return json({ posts });
}

export default function Index() {
  const { posts } = useLoaderData() as AppProps;
  return (
    <div>
      <Profile
        imageSrc={Me}
        name="Mahrouch Lina"
        description="Software Engineer who's obsessed with learning and building new things."
        width={128} // replace with actual image width
        height={128} 
      />
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        My Recent Posts
      </h1>
      <ul className="flex flex-col gap-4">
        {posts.posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <article className="p-4 rounded-ld space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              {/* This div will contain the date, which we want to stack on top on small screens */}
              <div className="xl:col-span-1">
                <p className="text-base font-medium leading-6 dark:text-zinc-300 text-zinc-700">
                  {new Date(post.createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              {/* The link and post content will follow */}
              <Link
                to={`/post/${post.slug}`}
                prefetch="intent"
                className="xl:col-span-3" // This will ensure the link takes up the remaining space on larger screens
              >
                <h2 className="text-xl font-bold leading-6 tracking-tight mb-2 dark:text-slate-500">
                  {post.title}
                </h2>
                <div className="prose max-w-none dark:text-slate-300">
                  {post.overview}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

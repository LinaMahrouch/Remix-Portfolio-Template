import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import { Project } from "~/utils/interface";

interface AppProps {
  projects: Project;
}

export async function loader({}: LoaderArgs) {
  const query = gql`
    query MyQuery {
      projects(orderBy: publishedAt_DESC) {
        id
        link
        overview
        title
        titleImage {
          url
        }
        publishedAt
      }
    }
  `;

  const projects = await hygraph.request(query);

  return json({ projects });
}

const Projects = () => {
  const { projects } = useLoaderData() as AppProps;

  return (
    <div className=" divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          My Projects
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8 ">
        {projects.projects.map((project) => (
          <article className="overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:shadow-gray-700/25">
            <img
              src={project.titleImage.url}
              alt="Image of Project"
              className="w-full  h-58 object-fit"
            />
            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-purple-600"
              >
                Discover More!
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;

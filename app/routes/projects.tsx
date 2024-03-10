import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import { Project } from "~/utils/interface";

interface AppProps {
  projects: Project;
}

export async function loader({}: LoaderFunctionArgs) {
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
    <div className="py-8 px-4">
    <h1 className="text-3xl font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-12">
      My Projects
    </h1>
    <div className="flex flex-wrap gap-8 justify-center">
      {projects.projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col bg-black border border-gray-700 shadow-lg rounded-lg overflow-hidden w-96 transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full object-cover h-48" // Adjust the height here with Tailwind's h- class
            src={project.titleImage.url}
            alt={project.title}
          />
          <div className="flex flex-col flex-1 p-4 justify-between">  
            <div>
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {project.overview}
              </p>
            </div>
            <div className="mt-auto"> 
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 rounded-lg px-4 py-2 block mt-4"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;

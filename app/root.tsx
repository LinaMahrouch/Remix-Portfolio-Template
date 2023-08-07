
import { logDevReady, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import { darkSessionResolver } from "./utils/session.server";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

//use a loader in order to get data
export async function loader ({request}:LoaderArgs) {
  const {getTheme} = await darkSessionResolver(request)

  return {
    theme: getTheme(),
  }

  
}

export default function AppWithProvider(){
  const {theme} = useLoaderData<typeof loader>()

  return(
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App/>
    </ThemeProvider>
  )

}

 function App() {
  //get theme here
  const {theme} = useLoaderData<typeof loader>();
  const [dTheme] = useTheme();
  return (
    <html lang="en" data-theme ={dTheme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-stone-900 dark:text-white font-medium h-full selection:bg-gray-50 dark: selection: bg-slate-500 ">
     <Layout>
     <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
     </Layout>
      </body>
    </html>
  );
}

function Layout ({children} : {children : ReactNode} ) 
{
  return(
  <div>
    <Navbar/>
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">{children}</main>

  </div>
  )
}

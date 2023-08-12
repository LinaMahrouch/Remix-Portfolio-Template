import AboutMe from '~/components/AboutMe';
import MeTerminal from '~/components/MeTerminal';

const Index = () => {
  return (
    <div className="grid pt-4 pb-8 xl:pb-4 min-h-[calc(100vh-64px)] gap-x-8 gap-y-8 xl:grid-cols-3 items-center justify-center justify-items-center">
      <AboutMe />
      <MeTerminal />
    </div>
  );
};

export default Index;

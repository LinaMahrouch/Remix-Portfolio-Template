interface ProfileProps {
    imageSrc: string;
    name: string;
    description: string;
  }
  
  export default function Profile({ imageSrc, name, description }: ProfileProps) {
    return (
      // <div className="grid max-w-lg grid-cols-1 justify-items-center gap-6 text-center mx-auto">
      //   <img src={imageSrc} alt={name}  className="mx-auto h-32 overflow-hidden rounded-full bg-slate-300" />
      //   <h1 className="text-2xl font-semibold mt-4">{name}</h1>
      //   <p className="text-lg mb-5">{description}</p>
      // </div>
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-4 mb-4 mx-auto">
       <img src={imageSrc} alt={name}  className=" h-32 overflow-hidden rounded-full " />
       {/* <h1 className="text-2xl font-semibold ">{name}</h1> */}
          <div className="grid grid-cols-1 gap-2 text-center"><h1 className="font-sans font-semibold tracking-tighter dark:text-white text-slate-800 text-3xl md:text-4xl">{name}</h1>
           <p className="font-serif text-xl italic font-se eading-normal tracking-tight dark:text-slate-400 text-slate-700">{description}</p></div>
           </div>
    );
  }
  
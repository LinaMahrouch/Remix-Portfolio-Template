interface ArticleProps {
    title: string;
    date: string;
    content: string;
    imageSrc: string;
  }
  
  export default function Article({ title, date, content, imageSrc }: ArticleProps) {
    return (
      <div className="border rounded p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 mb-4">{date}</p>
      
      <div className="flex">
        <img src={imageSrc} alt="Article Illustration" className="w-1/3 rounded mr-4" />
        <p className="text-base">{content}</p>
      </div>
    
    </div>
    );
  }
  
import { Card } from "flowbite-react";

const Bloc: React.FC<{ title: string; picture: string; description: string }> = ({ title, picture, description }) => {
  return (
    <Card className="max-w-sm mix-blend-hue"
        imgAlt={description}
        imgSrc={picture}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
        </p>
    </Card>

  );
}

export default Bloc;
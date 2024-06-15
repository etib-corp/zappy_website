import { Card } from "flowbite-react";

const Bloc: React.FC<{ properties: any }> = ({ properties }) => {
  return (
    <Card className="max-w-sm transition transform hover:-translate-y-1 hover:blur-none motion-reduce:transition-none motion-reduce:hover:transform-none"
        imgAlt={properties.description}
        imgSrc={properties.image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {properties.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {properties.description}
        </p>
    </Card>

  );
}

const Article: React.FC<{ properties : any }> = ({ properties }) => {
  return (
    <Card className="mx-20 my-5 max-w-smtransition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {properties.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {properties.content}
        </p>
    </Card>
  );
}

export { Article};
export default Bloc;
import { Avatar } from "flowbite-react";

const People: React.FC<{ name: string; picture: string; description: string }> = ({ name, picture, description }) => {
    return (
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Avatar rounded size="xs" img={picture} alt="profile picture" />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                {name}
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                {description}
            </cite>
            </div>
        </figcaption>
    );
}

export default People;
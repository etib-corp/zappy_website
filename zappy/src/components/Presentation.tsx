import Bloc from './Bloc';

import team from '../JSON/team.json';
import projects from '../JSON/projects.json';

export default function Presentation() {
  return (
    <div className="flex flex-wrap justify-center py-10">
        <div className="py-5 px-5 w-25">
            <Bloc properties={projects.onyx}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={projects.amber}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={projects.turing}/>
        </div>
    </div>
  );
}

export function Team () {
  return (
    <div className="flex flex-wrap justify-center py-10">
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.leo} />
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.julien}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.nathan}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.benjamin}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.cedric}/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc properties={team.noah}/>
        </div>
    </div>
  );
}
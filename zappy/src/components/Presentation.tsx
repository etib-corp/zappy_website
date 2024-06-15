import Bloc from './Bloc';

import team from '../JSON/team.json';
import projects from '../JSON/projects.json';
import { Link } from 'react-router-dom';

export default function Presentation() {
  return (
    <div className="flex flex-wrap justify-center py-10">
        <div className="py-5 px-5 w-25">
            <Link to="/onyx">
                <Bloc properties={projects.onyx}/>
            </Link>
        </div>
        <div className="py-5 px-5 w-25">
            <Link to="/amber">
                <Bloc properties={projects.amber}/>
            </Link>
        </div>
        <div className="py-5 px-5 w-25">
            <Link to="/turing">
                <Bloc properties={projects.turing}/>
            </Link>
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
import Bloc from './Bloc';

export default function Presentation() {
  return (
    <div className="flex flex-wrap justify-center py-10">
        <div className="py-5 px-5 w-25">
            <Bloc title="Onyx" picture="assets/onyx.webp" description="Hola"/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc title="Turing" picture="assets/turing.webp" description="Hola"/>
        </div>
        <div className="py-5 px-5 w-25">
            <Bloc title="Amber" picture="assets/amber.webp" description="Hola"/>
        </div>
    </div>
  );
}
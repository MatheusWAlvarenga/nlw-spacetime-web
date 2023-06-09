// vendors
import Image from 'next/image';
// assets
import logo from '../assets/nlw-logo.svg';

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="NLW Spacetime logo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-[2.5rem] font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block w-max justify-center rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-700 hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  );
}

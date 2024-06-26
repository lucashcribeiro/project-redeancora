import LogoImagem from '/public/logo.png';

export default function Logo() {
  return (
    <div className='flex justify-center row-span-2 items-center '>
      <img src={LogoImagem} alt='Logo da Rede ancora' className='h-44' />
    </div>
  );
}

import ButtonSide from './buttonSide';

export default function SideMenu() {
  return (
    <div className='flex flex-col  gap-1'>
      <ButtonSide texto='Busca por item' />
      <ButtonSide texto='Motor e Componentes' />
      <ButtonSide texto='Transmissão' />
      <ButtonSide texto='Sistema de freio' />
      <ButtonSide texto='Suspensão e direção' />
      <ButtonSide texto='Sistema elétrico' />
      <ButtonSide texto='Sistema de arrefecimento' />
      <ButtonSide texto='Carroceria e acessórios' />
      <ButtonSide texto='Rodas e pneus' />
    </div>
  );
}

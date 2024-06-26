import ImageFooter from '/public/footer.png';
export default function Footer() {
  return (
    <div className='flex items-end justify-center'>
      <img src={ImageFooter} alt='Imagem do Rodapé' />
    </div>
  );
}

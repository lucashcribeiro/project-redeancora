import KitImage from '/public/kitImage.png';

export default function Image() {
  return (
    <div className='flex justify-center items-center '>
      <img src={KitImage} alt='' />
    </div>
  );
}

export default function ButtonHome(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <div className='flex items-end justify-center mb-2'>
      <button
        {...olderProps}
        className={`Button textButton ${className || ''}`}
      >
        {texto}
      </button>
    </div>
  );
}

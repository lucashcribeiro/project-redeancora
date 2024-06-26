export default function ButtonSide(props) {
  // eslint-disable-next-line react/prop-types
  const { texto, className, ...olderProps } = props;
  return (
    <button
      {...olderProps}
      className={`text-azul-ancora border-b-2 border-astronaut-blue-200 py-4 Nunito ${className} || ''
      }`}
    >
      {texto}
    </button>
  );
}

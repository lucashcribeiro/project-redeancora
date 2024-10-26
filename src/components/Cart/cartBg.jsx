export default function cartBg({ children, isTrue }) {
  return (
    <div
      className={`h-100 max-h-[50vh] overflow-y-scroll bg-white flex-col transition-all ${
        isTrue ? " h-[50vh]" : " h-[0]"
      }  overflow-hidden px-4 custom-scroll`}
    >
      {children}
    </div>
  );
}

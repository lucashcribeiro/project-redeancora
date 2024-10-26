const CartTrigger = ({ event }) => {

  return (
    <div className="absolute z-[49] top-0 left-0 w-full h-full bg-black/10 cursor-pointer" onClick={() => event && event()}></div>
  )
}

export default CartTrigger;
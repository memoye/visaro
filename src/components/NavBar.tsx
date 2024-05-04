function NavBar() {
  return (
    <nav className="relative flex justify-between items-center bg-slate-900 h-[10vh] px-5">
      <div className="flex justify-between gap-1 items-center">
         <img className="w-8"  src="/logo.svg" alt="" />
         <h2 className="font-jersey  text-white text-lg">Visaro</h2>
      </div>
      <h2 className="text-white font-bold font-segoe text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">Home</h2>
      <div className="relative flex justify-center items-center">
         <img className="invert w-8 brightness-200" src="/cart.svg" alt="" />
         <span className="rounded-full w-5 h-5 bg-red-500 font-semibold flex justify-center items-center top-0 -right-2 absolute text-white -translate-y-1/2	">3</span>
      </div>
    </nav>
  )
}
export default NavBar
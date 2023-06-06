export const NavBar = () => {
  return (
    <div className='sticky flex items-center justify-between p-3'>
      <i className='transition duration-100 ease-in-out transform cursor-pointer material-icons text-regular hover:text-primary hover:scale-110'>
        menu
      </i>
      <span className='flex items-center'>
        <h1 className='text-5xl tracking-wide cursor-pointer font-heading'>ResteFest</h1>
      </span>
      <i className='transition duration-200 ease-in-out transform cursor-pointer material-icons hover:text-rose-300 hover:scale-110'>
        favorite
      </i>
    </div>
  );
};

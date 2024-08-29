import MaxWidthWrapper from './MaxWidthWrapper';

const Header = () => {
  return (
    <nav className="bg-black p-4 rounded-[20px_20px_0_0] text-white">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold 2xl:text-xl">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            <h1> Abstract</h1>
            <span>|</span>
            <h1 className="">Help Center</h1>
          </div>
          <button
            type="button"
            className="px-3 py-1 border border-white rounded-md "
          >
            Submit a request
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Header;

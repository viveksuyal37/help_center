const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px] 2xl:max-w-[1500px] mx-auto">{children}</div>
  );
};
export default MaxWidthWrapper;

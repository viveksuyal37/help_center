import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className="text-white bg-black ">
      <MaxWidthWrapper>
        <div className="flex flex-wrap items-center justify-between gap-5 my-10">
          <ul>
            <li className="mb-2 font-bold font-xl">Abstract</li>
            <li>Branches</li>
          </ul>
          <ul>
            <li className="mb-2 font-bold font-xl">Resources</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
          <ul>
            <li className="mb-2 font-bold font-xl">Community</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribble</li>
          </ul>
          <ul>
            <li className="mb-2 font-bold font-xl">Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
      </MaxWidthWrapper>
      ;
    </footer>
  );
};

export default Footer;

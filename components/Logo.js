import Link from "next/link";

const Logo = () => {
  const logo = "/logo.png";
  return (
    <div className="w-24 md:w-40 cursor-pointer">
      <Link href={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

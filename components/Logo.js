import Link from "next/link";

const Logo = () => {
  const logo = "/logo.png";
  return (
    <div className="w-28 cursor-pointer">
      <Link href={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

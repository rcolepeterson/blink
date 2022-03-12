function Layout({ children }) {
  return (
    <>
      <div className="container relative font-nrmlfont mx-auto min-w-full text-white h-screen">
        {children}
      </div>
    </>
  );
}

export default Layout;

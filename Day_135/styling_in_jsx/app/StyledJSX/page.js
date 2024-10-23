"use client";
const StyledJSX = () => {
  return (
    <>
      <div className="MyClass">
        This styling is coming from Styled JSX Which is a global StyledJSX.
        <style jsx global>{`
          .MyClass {
            color: red;
          }
        `}</style>
      </div>
      <p className="MyClass">
        This styling is coming from Styled JSX Which is a global StyledJSX but
        this part of the page is defined below the global StyledJSX.
      </p>
    </>
  );
};

export default StyledJSX;

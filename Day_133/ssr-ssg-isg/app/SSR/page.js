const SSR = () => {
  console.log("Server Side Rendering");

  return (
    <div>
      This is a server side rendered page which is by default settings in the
      server side.
    </div>
  );
};

export default SSR;
export async function generateMetadata({ params, searchParams }) {
  return {
    title: "SSR - Server Side Rendering",
    description: `Details about server side rendering`,
  };
}

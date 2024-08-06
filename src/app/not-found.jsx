const { default: Link } = require("next/link");

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/">Get back to homepage</Link>
    </div>
  );
};

export default NotFound;

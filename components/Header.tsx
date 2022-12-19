import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with latest web dev news.
      </p>
    </div>
  );
};

export default Header;

//? for conditionally styling of any component based on any logic, we can use jsx styling.

// const x = 3;

// <style jsx>
//     {`
//         .title {
//             color: ${x > 3 ? 'red': 'blue'};
//         }
//     `}
// </style>

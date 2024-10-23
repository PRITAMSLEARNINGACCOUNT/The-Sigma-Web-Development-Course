import styles from "../../styles/Custom.module.css";
const CustomStyle = () => {
  return (
    <>
      <div className={styles.CustomClass}>
        Custom Style Coming From A Different CSS File
      </div>
    </>
  );
};

export default CustomStyle;

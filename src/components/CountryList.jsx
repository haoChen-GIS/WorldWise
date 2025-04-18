import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  // 如果数据正在加载，显示加载指示器
  if (isLoading) return <Spinner />;

  // 如果城市列表为空，显示提示消息
  if (cities.length === 0)
    return (
      <Message
        message={"Add your first country by clicking a city on the map"}
      />
    );

  // 使用 reduce 方法从城市列表中提取唯一的国家
  const countries = cities.reduce((acc, city) => {
    const country = city.country; // 获取当前城市的国家名称
    // 如果累积数组中没有该国家，则将当前城市添加到累积数组
    if (!acc.some((c) => c.country === country)) {
      acc.push(city);
    }
    return acc; // 返回累积数组
  }, []); // 初始值为空数组

  // 渲染国家列表，每个国家对应一个 CountryItem 组件
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} /> // 渲染每个国家
      ))}
    </ul>
  );
}

export default CountryList;

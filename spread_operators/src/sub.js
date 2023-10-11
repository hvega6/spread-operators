const withSubscription = (WrappedComponet, selctData) => {
    return (props) => {
        const [data, setData] = useState([]);

        useEffect(() => {
          const handleChange = () => {
            const newData = selectData(DataSource, props);
            setData(newData)
          }
          DataSource.addListener(handleChange)
          return () => {
            DataSource.removeListener(handleChange)
          };
        }, []);
        
        return <WrappedComponet data={data} {...props}/>
    }
}

const LiveOrdersListWithSubscription = withSubscription(
    LiveOrders,
    () => DataSource.getOrders()
);

const UsersSubscripbedWithSubscription = withSubscription(
    UserList,
    () => DataSource.getSubscribers()
);
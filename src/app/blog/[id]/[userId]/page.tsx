const Page = ({
    params,
  }: {
    params: { id: string; userId: string};
  }) => {
    console.log(params);
    return <div className="m-4 font-bold">Blog ID: {params.userId}</div>;
  };
  
  export default Page;

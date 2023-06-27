type User = {
  id: string;
  name: string;
  email: string;
};

const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

const Page = async () => {
  await new Promise((resolve) => { setTimeout(resolve, 5000)})
  const users = await getUsers();
  console.log('users', users);
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">
        ユーザー一覧
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </h1>
    </div>
  );
};

export default Page;

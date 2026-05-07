import React, { use } from "react";

const UsersList = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border-2 border-black rounded-lg">
          <h3 className="text-xl font-medium">{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;

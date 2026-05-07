import UsersList from "@/components/usersPage/UsersList";
import React, { Suspense } from "react";

const getUsers = async () => {
  const res = await fetch("http://localhost:8000/users");
  return await res.json();
};

const UsersPage = async () => {
  const usersPromise = getUsers();

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-5 text-3xl font-semibold text-center">All Users</h2>

          <Suspense fallback={<p>loading,,,</p>}>
            <UsersList usersPromise={usersPromise} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default UsersPage;

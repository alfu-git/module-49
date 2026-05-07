import NewUserForm from "@/components/newUserPage/NewUserForm";
import React from "react";

const NewUserPage = () => {
  return (
    <section className="my-10 section mx-auto px-5">
      <div>
        <h2 className="mb-5 text-3xl font-semibold">Create New User</h2>

        <div className="max-w-5xl">
          <NewUserForm />
        </div>
      </div>
    </section>
  );
};

export default NewUserPage;

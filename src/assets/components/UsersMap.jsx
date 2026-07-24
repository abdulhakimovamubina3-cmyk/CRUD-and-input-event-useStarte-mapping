import { useState } from "react";

import Usercard from "./Usercard";

function UsersMap({users, onDelete}) {

  return (
    <section>
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {users &&
          users.map((user) => {
            return <Usercard 
            key={user.id} 
            user={user}
            onDelete={onDelete}
         />;
          })}
      </div>
    </section>

  );
}


export default UsersMap;
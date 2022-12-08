import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUser from "../../store/thunk/userFech";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import Jwt from "../card/jwt/Jwt";

export default function User() {
  const { users, isLoading, hasError } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <Jwt />
      {isLoading && <Loader />}
      <div class="ui grid">
        {!isLoading &&
          users.map((user) => {
            return (
              <div class="four wide column">
                <Card
                  name={user.name}
                  email={user.email}
                  username={user.username}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

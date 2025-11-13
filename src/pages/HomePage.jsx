import { useDispatch, useSelector } from "react-redux";
import { fetchUserByIdABC } from "../features/user/userSlice";

const HomePage = () => {
  const { user, error, id,loading } = useSelector((state) => state.userABC);
  const dispatch = useDispatch();

  const handleFetchUserById = async () => {
    try {
      await dispatch(
        fetchUserByIdABC({ email: "", pass: "123",id:1 })
      ).unwrap();
      console.log("User fetched successfully");
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };
  if(loading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error?.message || "Failed to fetch user"}</div>
  }

  return (
    <>
      <div>HomePage</div>
      <button onClick={() => handleFetchUserById(1)}>Fetch User By ID 1</button>
      <br />
      <button onClick={() => handleFetchUserById(2)}>Fetch User By ID 2</button>
      <br />
      <button onClick={() => handleFetchUserById(3)}>Fetch User By ID 3</button>
      <br />

      {user && (
        <div>
          <h3>User Info:</h3>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
};

export default HomePage;

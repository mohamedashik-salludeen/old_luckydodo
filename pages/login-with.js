import NoNav from "../components/common/NoNav";
import LoginWith from "../components/login/LoginWith";

export default function Login() {
  return (
    <>
      <NoNav />
      <LoginWith />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};

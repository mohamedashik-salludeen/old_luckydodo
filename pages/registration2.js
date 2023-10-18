import NoNav from "../components/common/NoNav";
import RegistrationForm2 from "../components/login/RegistrationForm2";

export default function Registration() {
  return (
    <>
      <NoNav />
      <RegistrationForm2 />
    </>
  );
}

Registration.getLayout = function getLayout(page) {
  return <>{page}</>;
};

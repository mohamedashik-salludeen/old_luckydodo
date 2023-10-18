import NoNav from "../components/common/NoNav";
import RegistrationForm from "../components/login/RegistrationForm";

export default function Registration() {
  return (
    <>
      <NoNav />
      <RegistrationForm />
    </>
  );
}

Registration.getLayout = function getLayout(page) {
  return <>{page}</>;
};

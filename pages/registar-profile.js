import NoNav from "../components/common/NoNav";
import ProfileForm from "../components/login/ProfileForm";

export default function Registration() {
  return (
    <>
      <NoNav />
      <ProfileForm />
    </>
  );
}

Registration.getLayout = function getLayout(page) {
  return <>{page}</>;
};

import NoNav from "../components/common/NoNav";
import ValidationForm from "../components/login/ValidationForm";

export default function verifyOTP() {
    return (
        <>
            <NoNav />
            <ValidationForm />
        </>
    );
}

verifyOTP.getLayout = function getLayout(page) {
    return <>{page}</>;
};

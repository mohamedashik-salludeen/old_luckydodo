import NoNav from '../components/common/NoNav';
import LoginForm from '../components/login/LoginForm';

export default function Login() {
    return (
        <>
            <NoNav />
            <LoginForm />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};

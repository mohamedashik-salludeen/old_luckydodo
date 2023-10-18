import { useDispatch } from 'react-redux';
import CurrentUserService from '../services/currentUserService';
import { setAuthData, setUser } from '../store/authSlice';

const useAuthActions = () => {
    const dispatch = useDispatch();

    const setUserAction = async (data) => {
        try {
            dispatch(setAuthData(data));
            const currentUser = await CurrentUserService.getCurrentUser();
            dispatch(setUser(currentUser.data));
        } catch (error) {
            console.log(error);
            throw error; // Rethrow the error to be handled by the component
        }
    };

    return { setUserAction };
};

export default useAuthActions;

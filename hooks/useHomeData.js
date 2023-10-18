import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategorie, getProducts, getIndustries } from '../services/algoliaService';
import { setCategories } from '../store/categoriesSlice';
import { setProducts } from '../store/productsSlice';
import { setIndustries } from '../store/industrySlice';
import ParticipantsService from '../services/participantService';
import FavoritesService from '../services/favoriteService';
import { setParticipations } from '../store/participantSlice';
import { setFavorites } from '../store/favoriteSlice';

function useHomeData(authenticated) {
    const dispatch = useDispatch();

    useEffect(() => {
        getCategorie().then((categories) => dispatch(setCategories({ categories })));
        getProducts().then((products) => dispatch(setProducts({ products })));
        getIndustries().then((industries) => dispatch(setIndustries({ industries })));
    }, []);

    useEffect(() => {
        if (authenticated) {
            ParticipantsService.getParticipants().then((data) => {
                dispatch(setParticipations(data));
            });
            FavoritesService.getFavorites().then((data) => {
                dispatch(setFavorites(data));
            });
        }
    }, [authenticated]);
}

export default useHomeData;

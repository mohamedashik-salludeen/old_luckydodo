import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Hero from '../components/hero/Hero';
import SearchInput from '../components/search/Input';
import FeaturedProducts from '../components/featuredProduct/Listing';
import ProductList from '../components/featuredProduct/ProductList';
import TopTenProducts from '../components/featuredProduct/TopTenProducts';
import SearchResults from '../components/featuredProduct/SearchResults';

import CategoryModal from '../components/category/CategoryModal';
import ProductModal from '../components/product/ProductModal';
import FavoriteModal from '../components/category/FavoriteModal';

import ParticipantsService from '../services/participantService';
import FavoritesService from '../services/favoriteService';
import { searchProducts } from '../services/algoliaService';
import AnalyticsService from '../services/analyticsService';

import { addParticipation } from '../store/participantSlice';
import { addFavorite, deleteFavorite } from '../store/favoriteSlice';

import useHomeData from '../hooks/useHomeData';

export default function Home() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [showProductModal, setShowProductModal] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);

    const { isAuthenticated: authenticated, user } = useSelector((state) => state.auth);
    const categories = useSelector((state) => state.categories.categories);
    const products = useSelector((state) => state.products.products);
    const selectedCity = useSelector((state) => state.cities.city);

    const { industry } = router.query;

    const historyPush = (url = '/') => {
        window.history.pushState({}, null, url);
    };
    const closeProductModal = () => {
        setShowProductModal(false);
        historyPush();
    };
    const openProductModal = ({ product }) => {
        setShowProductModal(true);
        historyPush(`/product/${product.productCode.toLowerCase()}`);
        authenticated && callAnalyticsService({ product, user });
    };

    const callAnalyticsService = ({ product, user }) => {
        try {
            AnalyticsService.addAnalytics({
                userId: user.id,
                productId: product.id,
                pageUrl: window.location.href,
                productCode: product.productCode,
                productName: product.name,
                categoryNodeId: product.categoryNodeId,
                userAgent: window.navigator.userAgent,
            });
        } catch (error) {
            console.warn(error);
        }
    };

    const openCategoryModal = ({ category }) => {
        setShowCategoryModal(true);
        historyPush(`/category${category?.url}`);
    };

    const closeCategoryModal = () => {
        setShowCategoryModal(false);
        historyPush();
    };

    useHomeData(authenticated);

    // Function to handle the popstate event
    const handlePopState = () => {
        const currentURL = window.location.pathname;
        if (currentURL === '/') {
            closeProductModal();
            closeCategoryModal();
        }
    };

    const handleParticipation = async (product) => {
        await ParticipantsService.addParticipant({ productId: product.id });
        dispatch(addParticipation({ productId: product.id }));
    };

    const handleFavoriteClick = async ({ isFavorite, productId }) => {
        try {
            if (isFavorite) {
                // If item is already a favorite, remove it
                await FavoritesService.deleteFavorite(productId);
                dispatch(deleteFavorite({ productId }));
            } else {
                // If item is not a favorite, add it
                await FavoritesService.addFavorite({ productId });
                dispatch(addFavorite({ productId }));
            }
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    useEffect(() => {
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        searchProducts(value).then(({ hits }) => {
            setSearchResults(hits);
        });
    };

    return (
        <>
            <Hero />
            <SearchInput onChange={handleInputChange} />
            {query && <SearchResults products={searchResults} openProductModal={openProductModal} />}

            {!query && (
                <>
                    {!industry && <FeaturedProducts title="See again" />}
                    {!industry && <TopTenProducts title="Top 10 in your country" />}
                    {!industry && <FeaturedProducts title="Trending now" />}

                    {categories &&
                        categories.length > 0 &&
                        categories
                            .filter((category) => (industry ? category.url.includes(industry) : true))
                            .map((category) => {
                                // Filter products based on selected category
                                const filteredProducts = products.filter(
                                    (product) => product.categoryNodeId === category.id,
                                );

                                // If a city is selected, further filter products by city
                                const cityFilteredProducts =
                                    selectedCity && selectedCity.name.toLowerCase() !== 'international'
                                        ? filteredProducts.filter((product) =>
                                              product.cityNodeId.includes(selectedCity.id),
                                          )
                                        : filteredProducts;

                                // Skip rendering if cityFilteredProducts is empty
                                if (cityFilteredProducts.length === 0) {
                                    return null;
                                }
                                return (
                                    <ProductList
                                        category={category}
                                        products={cityFilteredProducts}
                                        key={category.id}
                                        openCategoryModal={openCategoryModal}
                                        closeCategoryModal={closeCategoryModal}
                                        openProductModal={openProductModal}
                                    />
                                );
                            })}
                </>
            )}
            <ProductModal
                show={showProductModal}
                closeProductModal={closeProductModal}
                handleParticipation={handleParticipation}
                handleFavoriteClick={handleFavoriteClick}
            />
            <CategoryModal
                show={showCategoryModal}
                closeCategoryModal={closeCategoryModal}
                openProductModal={openProductModal}
            />
            <FavoriteModal openProductModal={openProductModal} />
        </>
    );
}

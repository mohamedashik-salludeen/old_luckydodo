import algoliasearch from 'algoliasearch';
import { INDEX_PREFIX, ALGOLIA_APP_ID, ALGOLIA_API_KEY } from './apiConstants';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export const getCategorie = async () => {
    const index = client.initIndex(`${INDEX_PREFIX}categories`);
    let hits = [];
    await index.browseObjects({
        batch: (batch) => {
            hits = hits.concat(batch);
        },
    });
    return hits;
};

export const getIndustries = async () => {
    const index = client.initIndex(`${INDEX_PREFIX}industries`);
    let hits = [];
    await index.browseObjects({
        batch: (batch) => {
            hits = hits.concat(batch);
        },
    });
    return hits;
};

export const getProducts = async () => {
    const index = client.initIndex(`${INDEX_PREFIX}products`);
    let hits = [];
    await index.browseObjects({
        batch: (batch) => {
            hits = hits.concat(batch);
        },
    });
    return hits;
};

export const searchProducts = async (query) => {
    const index = client.initIndex(`${INDEX_PREFIX}products`);
    return index.search(query);
};

export const getCities = async () => {
    const index = client.initIndex(`${INDEX_PREFIX}cities`);
    let cities = [];
    await index.browseObjects({
        batch: (batch) => {
            cities = cities.concat(batch);
        },
    });
    return cities;
};

export const getCountries = async () => {
    const index = client.initIndex(`${INDEX_PREFIX}countries`);
    let countries = [];
    await index.browseObjects({
        batch: (batch) => {
            countries = countries.concat(batch);
        },
    });
    return countries;
};

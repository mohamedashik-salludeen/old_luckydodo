import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onChange }) => {
    return (
        <section className="search_area">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-6">
                        <div className="search-bar">
                            <form action="#" method="post">
                                <div className="search-form">
                                    <i>
                                        <FaSearch />
                                    </i>
                                    <input
                                        type="text"
                                        className="form-control search_bar"
                                        placeholder="Search..."
                                        name=""
                                        onChange={onChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchInput;

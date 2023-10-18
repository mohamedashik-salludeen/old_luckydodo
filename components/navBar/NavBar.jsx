import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

import { CgProfile } from 'react-icons/cg';

import { RxTextAlignLeft } from 'react-icons/rx';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import Logo from '/public/images/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/authSlice';
import { useRouter } from 'next/router';
const NavBar = () => {
    const router = useRouter();

    const city = useSelector((state) => state.cities.city);
    console.log("city",city);
    const industries = useSelector((state) => state.industry.industries);
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [windowHeight, setWindowHeight] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const toggleMobileMenu = useCallback((status) => {
        setMobileMenuOpen(status);
    }, []);

    const menus = useRef();

    const hidenMenu = () => {
        if (menus.current !== null) {
            menus.current.classList.remove('show');
        }
    };

    const navBarTop = () => {
        if (window !== undefined) {
            let height = window.scrollY;
            setWindowHeight(height);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navBarTop);
        return () => {
            window.removeEventListener('scroll', navBarTop);
        };
    }, []);

    return (
        <>
            <header id="header" className={`header-section ${windowHeight > 50 && 'header-fixed animated fadeInDown'}`}>
                <div className="overlay">
                    <div className="custom_container header">
                        <div className="header-sc">
                            <div className="mobile-bar" onClick={() => toggleMobileMenu(true)}>
                                <span>
                                    <i>
                                        <RxTextAlignLeft />
                                    </i>
                                </span>
                            </div>
                            <div className="header-left">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src={Logo} className="logo" alt="logo" />
                                    </Link>
                                </div>
                                <div id="myMenu" className={`menu ${mobileMenuOpen ? 'active' : ''}`}>
                                    <nav className="nav-menu">
                                        <ul>
                                            <li onClick={() => toggleMobileMenu(false)}>
                                                <Link href="/city">
                                                    {city?.name || 'International'}
                                                    <span>
                                                        <i>
                                                            <AiOutlineRight />
                                                        </i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Explore
                                                    <span>
                                                        <i>
                                                            <AiOutlineRight />
                                                        </i>
                                                    </span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {industries.map((industry) => (
                                                        <Link
                                                            href={industry.url}
                                                            key={industry.id}
                                                            className="dropdown-item"
                                                        >
                                                            {industry.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </li>
                                            <li onClick={() => toggleMobileMenu(false)} className="d-none">
                                                <Link href="/explore">
                                                    Explore
                                                    <span>
                                                        <i>
                                                            <AiOutlineRight />
                                                        </i>
                                                    </span>
                                                </Link>
                                                {/* <div className='megamenu-content'>
													<div className='megaContainer'><Explore /></div>
												</div> */}
                                            </li>
                                            <li onClick={() => toggleMobileMenu(false)}>
                                                {isAuthenticated ? (
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#createTeamModal"
                                                        className="team"
                                                    >
                                                        Create a Team{' '}
                                                        <span className="team_icon">
                                                            <i>
                                                                <AiOutlinePlus />
                                                            </i>
                                                        </span>
                                                    </a>
                                                ) : (
                                                    <Link href="/login" className="team">
                                                        Create a Team{' '}
                                                        <span className="team_icon">
                                                            <i>
                                                                <AiOutlinePlus />
                                                            </i>
                                                        </span>
                                                    </Link>
                                                )}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right">
                                <ul>
                                    {isAuthenticated ? (
                                        <>
                                            <li className="mobHidden">
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#favoriteModal"
                                                    className="user-content-icon"
                                                >
                                                    <i>
                                                        <FaRegHeart />
                                                    </i>
                                                </a>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="mobHidden">
                                                <Link href="/login" className="user-content-icon">
                                                    <i>
                                                        <FaRegHeart />
                                                    </i>
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                    <li
                                        className="profileMenu"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={isAuthenticated ? '' : '/login'}
                                            className={`user-content-icon ${isHovered ? 'hovered' : ''}`}
                                        >
                                            <Image
                                                src={isAuthenticated ? user?.avatar : '/images/avatar/2.png'}
                                                className="logo header_avatar"
                                                alt="logo"
                                                width={34}
                                                height={34}
                                            />
                                        </Link>

                                        {isAuthenticated && (
                                            <ul>
                                                <li>
                                                    <Link href="/my-profile">
                                                        <span className="imageIcon">
                                                            <i>
                                                                <CgProfile />
                                                            </i>
                                                        </span>
                                                        <span className="text">Account</span>
                                                    </Link>
                                                </li>

                                                <li className="devider"></li>
                                                <li className="signOut">
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            dispatch(logoutUser());
                                                            router.push('/login');
                                                        }}
                                                    >
                                                        Sign out{' '}
                                                        <i>
                                                            <FiLogOut />
                                                        </i>
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`menu-overlay ${isHovered && 'active'}`} />
            <div
                onClick={() => toggleMobileMenu(false)}
                className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
            />
        </>
    );
};

export default NavBar;

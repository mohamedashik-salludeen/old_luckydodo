import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';
import CurrentUserService from '../../services/currentUserService';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../store/authSlice';
import { useRouter } from 'next/router';

const Avatar = ({ src, alt, onClick, isSelected }) => {
    return (
        <div className={`singleAvatar ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <Image src={src} alt={alt} width={88} height={88} />
        </div>
    );
};

const Avatars = () => {
    const router = useRouter();

    const { isAuthenticated } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
        router.push('/login');
    }

    const dispact = useDispatch();
    const avatarList = [
        '/images/avatar/1.png',
        '/images/avatar/2.png',
        '/images/avatar/3.png',
        '/images/avatar/4.png',
        '/images/avatar/5.png',
        '/images/avatar/6.png',
        '/images/avatar/7.png',
        '/images/avatar/8.png',
        '/images/avatar/9.png',
        '/images/avatar/10.png',
        '/images/avatar/11.png',
        '/images/avatar/12.png',
    ];

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarClick = async (avatar) => {
        setSelectedAvatar(avatar);
        try {
            const response = await CurrentUserService.updateUserAvatar({ avatar });
            dispact(setAvatar(avatar));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="profile_area">
            <div className="profile_avatar">
                <div className="container">
                    <div className="backButton">
                        <Link href="/my-profile/settings">
                            <i>
                                <AiOutlineLeft />
                            </i>
                            Back
                        </Link>
                    </div>
                    <div className="avatarArea">
                        <div className="section_title mb-4">Choose your Lucky Avatar</div>
                        <div className="avatarList">
                            {avatarList.map((avatar, index) => (
                                <Avatar
                                    key={index}
                                    src={avatar}
                                    alt="ava"
                                    onClick={() => handleAvatarClick(avatar)}
                                    isSelected={avatar === selectedAvatar}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Avatars;

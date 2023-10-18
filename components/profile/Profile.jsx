import Image from 'next/image';
import Link from 'next/link';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import Avter from '/public/images/avatar/2.png';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
        router.push('/login');
    }

    return (
        <section className="profile_area">
            <div className="profile_edit">
                <div className="container">
                    <div className="profileHeading">
                        <div className="hedingTitle">My Profile</div>
                        <div className="editButton">
                            <Link href="/my-profile/settings">Edit</Link>
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="profImag">
                            <Image alt="profile" src={user?.avatar || '/images/avatar/2.png'} width={88} height={88} />
                        </div>
                        <div className="profTitle">
                            <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    {/*
                    <div className="profileHeading">
                        <div className="hedingTitle">Groups</div>
                        <div className="editButton">
                            <Link href="/my-profile/edit-group">Edit</Link>
                        </div>
                    </div>
                     <div className="groupBoxArea row">
                        <div className="col-md-3">
                            <div className="groupBox">
                                <div className="groupImg">
                                    <Image src={Avter} alt="profile" />
                                </div>
                                <div className="groupTool">
                                    <div className="groupTitle">Group 1</div>
                                    <div className="groupMembers">
                                        <div className="membersIcons">
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon withButton">
                                                <Image src={Avter} alt="profile" />
                                                <button type="button">
                                                    <i><BsThreeDots /></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="memberInvite">
                                            <button type="button" className="btn btn-info invite"><i><AiOutlinePlus /></i>Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupBox">
                                <div className="groupImg">
                                    <Image src={Avter} alt="profile" />
                                </div>
                                <div className="groupTool">
                                    <div className="groupTitle">Group 2</div>
                                    <div className="groupMembers">
                                        <div className="membersIcons">
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon">
                                                <Image src={Avter} alt="profile" />
                                            </div>
                                            <div className="singleIcon withButton">
                                                <Image src={Avter} alt="profile" />
                                                <button type="button">
                                                    <i><BsThreeDots /></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="memberInvite">
                                            <button type="button" className="btn btn-info invite"><i><AiOutlinePlus /></i>Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupBox">
                                <div className="groupImg">
                                    <Image src={Avter} alt="profile" />
                                </div>
                                <div className="groupTool">
                                    <div className="groupTitle">Group 3</div>
                                    <div className="groupMembers">
                                        <div className="membersIcons">
                                            <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon withButton">
                                                    <Image src={Avter} alt="profile" />
                                                    <button type="button">
                                                        <i><BsThreeDots /></i>
                                                    </button>
                                                </div>
                                        </div>
                                        <div className="memberInvite">
                                            <button type="button" className="btn btn-info invite"><i><AiOutlinePlus /></i>Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupBox">
                                <div className="groupImg">
                                    <Image src={Avter} alt="profile" />
                                </div>
                                <div className="groupTool">
                                    <div className="groupTitle">Group 4</div>
                                    <div className="groupMembers">
                                        <div className="membersIcons">
                                            <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon">
                                                    <Image src={Avter} alt="profile" />
                                                </div>
                                                <div className="singleIcon withButton">
                                                    <Image src={Avter} alt="profile" />
                                                    <button type="button">
                                                        <i><BsThreeDots /></i>
                                                    </button>
                                            </div>
                                        </div>
                                        <div className="memberInvite">
                                            <button type="button" className="btn btn-info invite"><i><AiOutlinePlus /></i>Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Profile;

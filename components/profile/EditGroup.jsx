import Image from 'next/image';
import Link from 'next/link';
import { HiPencil } from 'react-icons/hi';
import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';
import Avter from '/public/images/avter.png';

const EditGroup = () => {

    return (
        <section className="profile_area">
            <div className="profile_done">
                <div className="container">
                    <div className="profileHeading">
                        <div className="hedingTitle">My Profile</div>
                        <div className="editButton">
                            <Link href='/my-profile'>Done</Link>
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="profImag">
                            <Image src={Avter} alt="profile" />
                            <i>
                                <HiPencil />
                            </i>
                        </div>
                        <div className="profTitle">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="profileHeading">
                        <div className="hedingTitle">Groups</div>
                        <div className="editButton">
                            <Link href='/my-profile'>Done</Link>
                        </div>
                    </div>
                    <div className="groupBoxArea row">
                        <div className="col-md-3">
                            <div className="groupSection">
                                <div className="groupList-area">
                                    <div className="groupImg">
                                        <Image src={Avter} alt="profile" />
                                        <i>
                                            <HiPencil />
                                        </i>
                                    </div>
                                    <div className="groupTitleEver">Group 1</div>
                                    <div className="iconDelete">
                                        <button type="button">
                                            <i>
                                                <AiTwotoneDelete />
                                            </i>
                                        </button>
                                    </div>
                                </div>

                                <div className="groupListing">
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="memberInvite">
                                    <button type="button" className="btn btn-info invite grp2">
                                        <i>
                                            <AiOutlinePlus />
                                        </i>
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupSection">
                                <div className="groupList-area">
                                    <div className="groupImg">
                                        <Image src={Avter} alt="profile" />
                                        <i>
                                            <HiPencil />
                                        </i>
                                    </div>
                                    <div className="groupTitleEver">Group 1</div>
                                    <div className="iconDelete">
                                        <button type="button">
                                            <i>
                                                <AiTwotoneDelete />
                                            </i>
                                        </button>
                                    </div>
                                </div>

                                <div className="groupListing">
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="memberInvite">
                                    <button type="button" className="btn btn-info invite grp2">
                                        <i>
                                            <AiOutlinePlus />
                                        </i>
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupSection">
                                <div className="groupList-area">
                                    <div className="groupImg">
                                        <Image src={Avter} alt="profile" />
                                        <i>
                                            <HiPencil />
                                        </i>
                                    </div>
                                    <div className="groupTitleEver">Group 1</div>
                                    <div className="iconDelete">
                                        <button type="button">
                                            <i>
                                                <AiTwotoneDelete />
                                            </i>
                                        </button>
                                    </div>
                                </div>

                                <div className="groupListing">
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="memberInvite">
                                    <button type="button" className="btn btn-info invite grp2">
                                        <i>
                                            <AiOutlinePlus />
                                        </i>
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="groupSection">
                                <div className="groupList-area">
                                    <div className="groupImg">
                                        <Image src={Avter} alt="profile" />
                                        <i>
                                            <HiPencil />
                                        </i>
                                    </div>
                                    <div className="groupTitleEver">Group 1</div>
                                    <div className="iconDelete">
                                        <button type="button">
                                            <i>
                                                <AiTwotoneDelete />
                                            </i>
                                        </button>
                                    </div>
                                </div>

                                <div className="groupListing">
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <Image src={Avter} alt="profile" />
                                            <span>Name here</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="memberInvite">
                                    <button type="button" className="btn btn-info invite grp2">
                                        <i>
                                            <AiOutlinePlus />
                                        </i>
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditGroup;

import { IoIosArrowBack } from 'react-icons/io';
const PrevButton = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`nextPrevBtn ${ className }`} onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };
  
  export default PrevButton;
  
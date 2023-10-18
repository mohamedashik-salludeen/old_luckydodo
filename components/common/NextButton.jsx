import { IoIosArrowForward } from 'react-icons/io';
const NextButton = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`nextPrevBtn ${ className }`} onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };
  
  export default NextButton;
  
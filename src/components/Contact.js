import './Contact.css';
import MaleIcon from '../assets/MaleIcon.svg';
import FemaleIcon from '../assets/FemaleIcon.png';
import UnknownGenderIcon from '../assets/UnknownGender.png';

function Contact(props) {
  return props.contacts.map((contact) => {
    const { firstName, lastName, phone, gender } = contact;

    function displayGenderImage(gender) {
      switch (gender) {
        case 'male':
          return MaleIcon;

        case 'female':
          return FemaleIcon;

        default:
          return UnknownGenderIcon;
      }
    }

    return (
      <div className="contact" key={firstName + lastName}>
        <img
          src={displayGenderImage(gender)}
          alt={gender + '__icon'}
          className="contact_image"
        />
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{phone}</p>
      </div>
    );
  });
}
export default Contact;

import React, { useState } from 'react';
import './ContactsList.css';
import Contact from './Contact.js';
import contacts from '../data/data.js';
import SearchIcon from '../assets/SearchIcon.svg';

function ContactsList() {
  const [searchValue, setSearchValue] = useState('');
  const [gendersToShow, setgendersToShow] = useState({
    male: true,
    female: true,
    anonymous: true,
  });

  const enableGenders = (event) => {
    gendersToShow[event.target.name] = !gendersToShow[event.target.name];
    setgendersToShow({
      ...gendersToShow,
    });
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredArray = contacts 
    .filter((contact) => {
      if (gendersToShow['male'] && contact.gender === 'male') {
        return contact;
      } else if (gendersToShow['female'] && contact.gender === 'female') {
        return contact;
      } else if (gendersToShow['anonymous'] && contact.gender === undefined) {
        return contact;
      }
    })
    .filter((el) => {
      const [
        firstNameLowerCase,
        lastNameLowerCase,
        phone,
        searchValueLowerCase,
      ] = [
        el.firstName.toLowerCase(),
        el.lastName.toLowerCase(),
        el.phone,
        searchValue.toLowerCase(),
      ];
      const dataArray = [];
      dataArray.push(firstNameLowerCase, lastNameLowerCase, phone);

      return dataArray.filter((item) => item.includes(searchValueLowerCase))
        .length > 0 || searchValue === ''
        ? el
        : '';
    });
  return (
    <div className="contacts-list">
      <div className="search-field-container">
        <img src={SearchIcon} alt="SearchIcon" className="img__search" />
        <input
          type="text"
          value={searchValue}
          onChange={(event) => {
            handleSearchChange(event);
          }}
        />
      </div>
      <h2>Filter by gender:</h2>
      <div className="checkBoxContainer">
        <fieldset>
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            checked={gendersToShow['male']}
            name="male"
            onChange={enableGenders}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            checked={gendersToShow['female']}
            name="female"
            onChange={enableGenders}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="anonymous">Not specified</label>
          <input
            type="checkbox"
            checked={gendersToShow['anonymous']}
            name="anonymous"
            onChange={enableGenders}
          />
        </fieldset>
      </div>

      <Contact contacts={filteredArray} />
    </div>
  );
}

export default ContactsList;

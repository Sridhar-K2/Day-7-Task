// c)Print the following details name, capital, flag, using forEach function

//                     SOLUTION:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(country => {
     
      const name = country.name.common;
      const capital = country.capital ? country.capital[0] : 'N/A';
      const flag = country.flags ? country.flags[0] : 'N/A';

      
      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


//                       OUTPUT:

/*
 [Running] node "d:\FSD55WD2-T\Day-8\Task 1(c).js"
Name: Christmas Island, Capital: Flying Fish Cove, Flag: undefined
Name: Eritrea, Capital: Asmara, Flag: undefined
Name: Samoa, Capital: Apia, Flag: undefined
Name: North Macedonia, Capital: Skopje, Flag: undefined
Name: Djibouti, Capital: Djibouti, Flag: undefined
Name: Jordan, Capital: Amman, Flag: undefined
Name: Pakistan, Capital: Islamabad, Flag: undefined
Name: French Polynesia, Capital: Papeetē, Flag: undefined
Name: Ireland, Capital: Dublin, Flag: undefined
Name: Mauritania, Capital: Nouakchott, Flag: undefined
Name: Denmark, Capital: Copenhagen, Flag: undefined
Name: Namibia, Capital: Windhoek, Flag: undefined
Name: Ghana, Capital: Accra, Flag: undefined
Name: South Sudan, Capital: Juba, Flag: undefined
Name: Slovakia, Capital: Bratislava, Flag: undefined
Name: American Samoa, Capital: Pago Pago, Flag: undefined
Name: Moldova, Capital: Chișinău, Flag: undefined
Name: North Korea, Capital: Pyongyang, Flag: undefined
Name: Macau, Capital: N/A, Flag: undefined
Name: Turks and Caicos Islands, Capital: Cockburn Town, Flag: undefined
Name: Seychelles, Capital: Victoria, Flag: undefined
Name: Armenia, Capital: Yerevan, Flag: undefined
Name: Curaçao, Capital: Willemstad, Flag: undefined
Name: Guadeloupe, Capital: Basse-Terre, Flag: undefined
Name: British Indian Ocean Territory, Capital: Diego Garcia, Flag: undefined
Name: Equatorial Guinea, Capital: Malabo, Flag: undefined
Name: Syria, Capital: Damascus, Flag: undefined
Name: Angola, Capital: Luanda, Flag: undefined
Name: Tajikistan, Capital: Dushanbe, Flag: undefined
Name: Venezuela, Capital: Caracas, Flag: undefined
Name: United States Minor Outlying Islands, Capital: Washington DC, Flag: undefined
Name: Åland Islands, Capital: Mariehamn, Flag: undefined
Name: Poland, Capital: Warsaw, Flag: undefined
Name: Saudi Arabia, Capital: Riyadh, Flag: undefined
Name: Republic of the Congo, Capital: Brazzaville, Flag: undefined
Name: Bosnia and Herzegovina, Capital: Sarajevo, Flag: undefined
Name: United States Virgin Islands, Capital: Charlotte Amalie, Flag: undefined
Name: New Caledonia, Capital: Nouméa, Flag: undefined
Name: San Marino, Capital: City of San Marino, Flag: undefined
Name: Czechia, Capital: Prague, Flag: undefined
Name: Guatemala, Capital: Guatemala City, Flag: undefined
Name: South Korea, Capital: Seoul, Flag: undefined
Name: Estonia, Capital: Tallinn, Flag: undefined
Name: Nepal, Capital: Kathmandu, Flag: undefined
Name: Kosovo, Capital: Pristina, Flag: undefined
Name: Botswana, Capital: Gaborone, Flag: undefined
Name: Philippines, Capital: Manila, Flag: undefined
Name: Saint Pierre and Miquelon, Capital: Saint-Pierre, Flag: undefined
Name: Iraq, Capital: Baghdad, Flag: undefined
Name: Lebanon, Capital: Beirut, Flag: undefined
Name: Burundi, Capital: Gitega, Flag: undefined
Name: Mongolia, Capital: Ulan Bator, Flag: undefined
Name: Faroe Islands, Capital: Tórshavn, Flag: undefined
Name: Paraguay, Capital: Asunción, Flag: undefined
Name: Svalbard and Jan Mayen, Capital: Longyearbyen, Flag: undefined
Name: Tokelau, Capital: Fakaofo, Flag: undefined
Name: Guernsey, Capital: St. Peter Port, Flag: undefined
Name: Caribbean Netherlands, Capital: Kralendijk, Flag: undefined
Name: Algeria, Capital: Algiers, Flag: undefined
Name: France, Capital: Paris, Flag: undefined
Name: Netherlands, Capital: Amsterdam, Flag: undefined
Name: Greenland, Capital: Nuuk, Flag: undefined
Name: Sint Maarten, Capital: Philipsburg, Flag: undefined
Name: Chad, Capital: N'Djamena, Flag: undefined
Name: Finland, Capital: Helsinki, Flag: undefined
Name: Panama, Capital: Panama City, Flag: undefined
Name: Palestine, Capital: Ramallah, Flag: undefined
Name: Yemen, Capital: Sana'a, Flag: undefined
Name: Brazil, Capital: Brasília, Flag: undefined
Name: Nigeria, Capital: Abuja, Flag: undefined
Name: Palau, Capital: Ngerulmud, Flag: undefined
Name: Japan, Capital: Tokyo, Flag: undefined
Name: Tanzania, Capital: Dodoma, Flag: undefined
Name: Kazakhstan, Capital: Nur-Sultan, Flag: undefined
Name: Portugal, Capital: Lisbon, Flag: undefined
Name: South Georgia, Capital: King Edward Point, Flag: undefined
Name: Sri Lanka, Capital: Sri Jayawardenepura Kotte, Flag: undefined
Name: Germany, Capital: Berlin, Flag: undefined
Name: Western Sahara, Capital: El Aaiún, Flag: undefined
Name: Myanmar, Capital: Naypyidaw, Flag: undefined
Name: Colombia, Capital: Bogotá, Flag: undefined
Name: Peru, Capital: Lima, Flag: undefined
Name: Senegal, Capital: Dakar, Flag: undefined
Name: Kyrgyzstan, Capital: Bishkek, Flag: undefined
Name: China, Capital: Beijing, Flag: undefined
Name: Afghanistan, Capital: Kabul, Flag: undefined
Name: Turkey, Capital: Ankara, Flag: undefined
Name: Liberia, Capital: Monrovia, Flag: undefined
Name: South Africa, Capital: Pretoria, Flag: undefined
Name: Chile, Capital: Santiago, Flag: undefined
Name: Malta, Capital: Valletta, Flag: undefined
Name: Kiribati, Capital: South Tarawa, Flag: undefined
Name: Cape Verde, Capital: Praia, Flag: undefined
Name: Jersey, Capital: Saint Helier, Flag: undefined
Name: Iceland, Capital: Reykjavik, Flag: undefined
Name: Gambia, Capital: Banjul, Flag: undefined
Name: Vanuatu, Capital: Port Vila, Flag: undefined
Name: Uruguay, Capital: Montevideo, Flag: undefined
Name: Oman, Capital: Muscat, Flag: undefined
Name: Sudan, Capital: Khartoum, Flag: undefined
Name: India, Capital: New Delhi, Flag: undefined
Name: Laos, Capital: Vientiane, Flag: undefined
Name: Aruba, Capital: Oranjestad, Flag: undefined
Name: Martinique, Capital: Fort-de-France, Flag: undefined
Name: Comoros, Capital: Moroni, Flag: undefined
Name: Spain, Capital: Madrid, Flag: undefined
Name: Antigua and Barbuda, Capital: Saint John's, Flag: undefined
Name: Uzbekistan, Capital: Tashkent, Flag: undefined
Name: Maldives, Capital: Malé, Flag: undefined
Name: Gibraltar, Capital: Gibraltar, Flag: undefined
Name: Indonesia, Capital: Jakarta, Flag: undefined
Name: Pitcairn Islands, Capital: Adamstown, Flag: undefined
Name: Vietnam, Capital: Hanoi, Flag: undefined
Name: Malaysia, Capital: Kuala Lumpur, Flag: undefined
Name: Cook Islands, Capital: Avarua, Flag: undefined
Name: Eswatini, Capital: Mbabane, Flag: undefined
Name: Uganda, Capital: Kampala, Flag: undefined
Name: Madagascar, Capital: Antananarivo, Flag: undefined
Name: Fiji, Capital: Suva, Flag: undefined
Name: Norway, Capital: Oslo, Flag: undefined
Name: Antarctica, Capital: N/A, Flag: undefined
Name: Bouvet Island, Capital: N/A, Flag: undefined
Name: Cyprus, Capital: Nicosia, Flag: undefined
Name: Taiwan, Capital: Taipei, Flag: undefined
Name: Papua New Guinea, Capital: Port Moresby, Flag: undefined
Name: Rwanda, Capital: Kigali, Flag: undefined
Name: DR Congo, Capital: Kinshasa, Flag: undefined
Name: Cameroon, Capital: Yaoundé, Flag: undefined
Name: Serbia, Capital: Belgrade, Flag: undefined
Name: Lithuania, Capital: Vilnius, Flag: undefined
Name: French Southern and Antarctic Lands, Capital: Port-aux-Français, Flag: undefined
Name: Cambodia, Capital: Phnom Penh, Flag: undefined
Name: Saint Helena, Ascension and Tristan da Cunha, Capital: Jamestown, Flag: undefined
Name: United Arab Emirates, Capital: Abu Dhabi, Flag: undefined
Name: Bermuda, Capital: Hamilton, Flag: undefined
Name: Monaco, Capital: Monaco, Flag: undefined
Name: Cuba, Capital: Havana, Flag: undefined
Name: Hong Kong, Capital: City of Victoria, Flag: undefined
Name: Northern Mariana Islands, Capital: Saipan, Flag: undefined
Name: Togo, Capital: Lomé, Flag: undefined
Name: Luxembourg, Capital: Luxembourg, Flag: undefined
Name: Mauritius, Capital: Port Louis, Flag: undefined
Name: Argentina, Capital: Buenos Aires, Flag: undefined
Name: Grenada, Capital: St. George's, Flag: undefined
Name: Nicaragua, Capital: Managua, Flag: undefined
Name: Niue, Capital: Alofi, Flag: undefined
Name: Ukraine, Capital: Kyiv, Flag: undefined
Name: Guyana, Capital: Georgetown, Flag: undefined
Name: Niger, Capital: Niamey, Flag: undefined
Name: Benin, Capital: Porto-Novo, Flag: undefined
Name: Saint Lucia, Capital: Castries, Flag: undefined
Name: Tuvalu, Capital: Funafuti, Flag: undefined
Name: Norfolk Island, Capital: Kingston, Flag: undefined
Name: Egypt, Capital: Cairo, Flag: undefined
Name: Saint Kitts and Nevis, Capital: Basseterre, Flag: undefined
Name: Lesotho, Capital: Maseru, Flag: undefined
Name: Tonga, Capital: Nuku'alofa, Flag: undefined
Name: Georgia, Capital: Tbilisi, Flag: undefined
Name: Ethiopia, Capital: Addis Ababa, Flag: undefined
Name: Dominican Republic, Capital: Santo Domingo, Flag: undefined
Name: Saint Vincent and the Grenadines, Capital: Kingstown, Flag: undefined
Name: Belize, Capital: Belmopan, Flag: undefined
Name: Isle of Man, Capital: Douglas, Flag: undefined
Name: Morocco, Capital: Rabat, Flag: undefined
Name: Haiti, Capital: Port-au-Prince, Flag: undefined
Name: Mayotte, Capital: Mamoudzou, Flag: undefined
Name: Burkina Faso, Capital: Ouagadougou, Flag: undefined
Name: Bangladesh, Capital: Dhaka, Flag: undefined
Name: Kuwait, Capital: Kuwait City, Flag: undefined
Name: Réunion, Capital: Saint-Denis, Flag: undefined
Name: Jamaica, Capital: Kingston, Flag: undefined
Name: Romania, Capital: Bucharest, Flag: undefined
Name: São Tomé and Príncipe, Capital: São Tomé, Flag: undefined
Name: Bahamas, Capital: Nassau, Flag: undefined
Name: Mexico, Capital: Mexico City, Flag: undefined
Name: Saint Martin, Capital: Marigot, Flag: undefined
Name: El Salvador, Capital: San Salvador, Flag: undefined
Name: Saint Barthélemy, Capital: Gustavia, Flag: undefined
Name: Micronesia, Capital: Palikir, Flag: undefined
Name: Turkmenistan, Capital: Ashgabat, Flag: undefined
Name: Anguilla, Capital: The Valley, Flag: undefined
Name: Central African Republic, Capital: Bangui, Flag: undefined
Name: Suriname, Capital: Paramaribo, Flag: undefined
Name: Belgium, Capital: Brussels, Flag: undefined
Name: Sweden, Capital: Stockholm, Flag: undefined
Name: Bolivia, Capital: Sucre, Flag: undefined
Name: Montenegro, Capital: Podgorica, Flag: undefined
Name: Mozambique, Capital: Maputo, Flag: undefined
Name: Latvia, Capital: Riga, Flag: undefined
Name: Malawi, Capital: Lilongwe, Flag: undefined
Name: Mali, Capital: Bamako, Flag: undefined
Name: Vatican City, Capital: Vatican City, Flag: undefined
Name: Montserrat, Capital: Plymouth, Flag: undefined
Name: Austria, Capital: Vienna, Flag: undefined
Name: Albania, Capital: Tirana, Flag: undefined
Name: British Virgin Islands, Capital: Road Town, Flag: undefined
Name: Zambia, Capital: Lusaka, Flag: undefined
Name: French Guiana, Capital: Cayenne, Flag: undefined
Name: Liechtenstein, Capital: Vaduz, Flag: undefined
Name: Qatar, Capital: Doha, Flag: undefined
Name: Solomon Islands, Capital: Honiara, Flag: undefined
Name: Nauru, Capital: Yaren, Flag: undefined
Name: Greece, Capital: Athens, Flag: undefined
Name: Libya, Capital: Tripoli, Flag: undefined
Name: Guinea-Bissau, Capital: Bissau, Flag: undefined
Name: Barbados, Capital: Bridgetown, Flag: undefined
Name: Honduras, Capital: Tegucigalpa, Flag: undefined
Name: Somalia, Capital: Mogadishu, Flag: undefined
Name: Cayman Islands, Capital: George Town, Flag: undefined
Name: Italy, Capital: Rome, Flag: undefined
Name: Wallis and Futuna, Capital: Mata-Utu, Flag: undefined
Name: Andorra, Capital: Andorra la Vella, Flag: undefined
Name: Ecuador, Capital: Quito, Flag: undefined
Name: Kenya, Capital: Nairobi, Flag: undefined
Name: Bahrain, Capital: Manama, Flag: undefined
Name: United Kingdom, Capital: London, Flag: undefined
Name: Guinea, Capital: Conakry, Flag: undefined
Name: Heard Island and McDonald Islands, Capital: N/A, Flag: undefined
Name: Russia, Capital: Moscow, Flag: undefined
Name: Brunei, Capital: Bandar Seri Begawan, Flag: undefined
Name: Zimbabwe, Capital: Harare, Flag: undefined
Name: Guam, Capital: Hagåtña, Flag: undefined
Name: Australia, Capital: Canberra, Flag: undefined
Name: Slovenia, Capital: Ljubljana, Flag: undefined
Name: Belarus, Capital: Minsk, Flag: undefined
Name: Thailand, Capital: Bangkok, Flag: undefined
Name: New Zealand, Capital: Wellington, Flag: undefined
Name: Tunisia, Capital: Tunis, Flag: undefined
Name: Marshall Islands, Capital: Majuro, Flag: undefined
Name: Sierra Leone, Capital: Freetown, Flag: undefined
Name: Bhutan, Capital: Thimphu, Flag: undefined
Name: United States, Capital: Washington, D.C., Flag: undefined
Name: Switzerland, Capital: Bern, Flag: undefined
Name: Falkland Islands, Capital: Stanley, Flag: undefined
Name: Cocos (Keeling) Islands, Capital: West Island, Flag: undefined
Name: Gabon, Capital: Libreville, Flag: undefined
Name: Dominica, Capital: Roseau, Flag: undefined
Name: Canada, Capital: Ottawa, Flag: undefined
Name: Trinidad and Tobago, Capital: Port of Spain, Flag: undefined
Name: Puerto Rico, Capital: San Juan, Flag: undefined
Name: Singapore, Capital: Singapore, Flag: undefined
Name: Hungary, Capital: Budapest, Flag: undefined
Name: Costa Rica, Capital: San José, Flag: undefined
Name: Israel, Capital: Jerusalem, Flag: undefined
Name: Bulgaria, Capital: Sofia, Flag: undefined
Name: Azerbaijan, Capital: Baku, Flag: undefined
Name: Timor-Leste, Capital: Dili, Flag: undefined
Name: Iran, Capital: Tehran, Flag: undefined
Name: Croatia, Capital: Zagreb, Flag: undefined
Name: Ivory Coast, Capital: Yamoussoukro, Flag: undefined

[Done] exited with code=0 in 2.07 seconds

 */
// ====================================================================================================================================================================================================================
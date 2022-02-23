export const translateCategory = (category) => {
  switch (category) {
    case 'english':
      return 'angielski';
    case 'dutch':
      return 'niemiecki';
    case 'french':
      return 'francuski';
    case 'spanish':
      return 'hiszpański';
    case 'hungarian':
      return 'węgierski';
    case 'russian':
      return 'rosyjski';
    case 'polish':
      return 'polski';
    case 'history':
      return 'historia';
    case 'philosophy':
      return 'filozofia';
    case 'law':
      return 'prawo';
    case 'robotics':
      return 'robotyka';
    case 'electrotechnics':
      return 'elektrotechnika';
    case 'coding':
      return 'programowanie';
    case 'it':
      return 'informatyka';
    case 'physics':
      return 'fizyka';
    case 'biology':
      return 'biologia';
    case 'geography':
      return 'geografia';
    case 'geodesy':
      return 'geodezja';
    case 'chemistry':
      return 'chemia';
    case 'medicine':
      return 'medycyna';
    case 'counting':
      return 'rachunkowość';
    case 'finances':
      return 'finanse';
    case 'banking':
      return 'bankowość';
    case 'managment':
      return 'zarządzanie';
    case 'marketing':
      return 'marketing';
    case 'primary':
      return 'podstawówka';
    case 'high':
      return 'szkoła średnia';
    case 'studies':
      return 'studia';
    default:
      return '';
  }
};

'use strict';


// מערך של אנשי קשר — כל איש קשר הוא אובייקט עם שם, טלפון ותמונה
const contacts = [
  {
    name: 'Bertha Yates',
    phone: '050-1234567',
    image: 'images/bertha.png'
  },
  {
    name: 'Hector Hogan',
    phone: '052-7654321',
    image: 'images/hector.png'
  },
  {
    name: 'Larry Little',
    phone: '054-9876543',
    image: 'images/larry.png'
  },
  {
    name: 'Sean Walsh',
    phone: '053-5678901',
    image: 'images/sean.png'
  }
];

// פונקציה שמציגה את כל אנשי הקשר על המסך
function renderContacts(contactArr) {
  const list = document.querySelector('.contacts-list');
  // מוצא את ה־ul בדף שאליו נכניס את אנשי הקשר

  list.innerHTML = '';
  // מנקה את התוכן הקיים (אם יש)

  // עובר על כל איש קשר במערך
  contactArr.forEach(contact => {
    // יוצר תגית <li> לכל איש קשר
    const li = document.createElement('li');
    li.className = 'contact-item';

    // יוצר תגית <img> לתמונה של איש הקשר
    const img = document.createElement('img');
    img.src = contact.image;
    img.alt = contact.name;

    // יוצר תגית <span> עם השם
    const nameSpan = document.createElement('span');
    nameSpan.className = 'contact-name';
    nameSpan.textContent = contact.name;

    // יוצר קבוצה של כפתורים (div)
    const btnContainer = document.createElement('div');
    btnContainer.className = 'contact-buttons';

    // כפתור מידע (info)
    const infoBtn = document.createElement('button');
    infoBtn.title = 'Info';        // טקסט שמופיע כשמרחפים עם העכבר
    infoBtn.textContent = 'ℹ️';    // האייקון

    // כפתור עריכה
    const editBtn = document.createElement('button');
    editBtn.title = 'Edit';
    editBtn.textContent = '✏️';

    // כפתור מחיקה
    const deleteBtn = document.createElement('button');
    deleteBtn.title = 'Delete';
    deleteBtn.textContent = '🗑️';

    // מוסיף את שלושת הכפתורים לקופסה שלהם (div)
    btnContainer.appendChild(infoBtn);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // מוסיף ל־li את התמונה, את השם ואת כפתורי הפעולה
    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(btnContainer);

    // מוסיף את ה־li ל־ul הראשי בדף
    list.appendChild(li);
  });

  // מעדכן את הטקסט שמציג כמה אנשים יש ברשימה
  const countSpan = document.querySelector('.count');
  countSpan.textContent = `${contactArr.length} people`;
}

// קורא לפונקציה ומציג את כל אנשי הקשר מיד כשנטען הדף
renderContacts(contacts);

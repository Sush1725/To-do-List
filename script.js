  //Select DOM elements for date display
  let date = document.getElementById('date');
  let day = document.getElementById('day');
  let month = document.getElementById('month');
  let year = document.getElementById('year');

  const today = new Date;

  //Arrays for day and month names
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
  const Allmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();
  day.innerHTML = weekDays[today.getDay()];
  month.innerHTML = Allmonths[today.getMonth()];
  year.innerHTML = today.getFullYear();


  //Select DOM elements for task management
  let inn = document.querySelector('.in');
  let btn = document.querySelector('.btn');
  let listBox = document.querySelector('.list-box');
  let clear = document.querySelector('.clear');



  function addTask() {

      if (inn.value == '') {
          alert("You must write your Task");
      }
      else {

          let li = document.createElement('li');
          li.innerHTML = inn.value;
          let span = document.createElement('span');
          span.innerHTML = "\u00d7";
          li.appendChild(span);
          listBox.appendChild(li);
          clear.style.display = 'block';

      }

      inn.value = '';
      saveData();
  }


  btn.addEventListener('click', addTask);

  listBox.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked');
          saveData();

      }
      else if (e.target.tagName === 'SPAN') {
          e.target.parentElement.remove();
          saveData();
          if (listBox.children.length == 0) {
              clear.style.display = 'none';
          }

      }
  }, false)

  //save task list to local storage
  function saveData() {
      localStorage.setItem('data', listBox.innerHTML);
  }

  //load task list from local storage
  function showData() {
      listBox.innerHTML = localStorage.getItem('data');
      if (listBox.children.length === 0) {
          clear.style.display = 'none'; //Hide the clear button if no task are loaded
      } else {
          clear.style.display = 'block'; //show the clear button if tasks are present
      }
  }
  showData();


  //Function to delete all task at once
  function deleteAll() {
      listBox.innerHTML = '';
      saveData();
      clear.style.display = 'none';
  }

  //Function to remove the delete all button
  clear.addEventListener('click', deleteAll);


  if (listBox.children.length === 0) {
      clear.style.display = 'none';
  } else {
      clear.style.display = 'block';
  }






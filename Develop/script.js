
let currentHr = dayjs().hour();
function updateBackGroundColor() {
  $('.time-block').each(function(){
      let scheduleHour = $(this).attr('id').split('-')[1]
       if (currentHr > scheduleHour) {
         $(this).addClass('past')
       }
       else if(currentHr === scheduleHour){
         $(this).addClass('present')
       }
       else{
         $(this).addClass('future')
       }
  })
}

// get any user input that was saved in localStorage and set
$('#hour-09 .description').val(localStorage.getItem('hour-09'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-1 .description').val(localStorage.getItem('hour-1'))
$('#hour-2 .description').val(localStorage.getItem('hour-2'))
$('#hour-03 .description').val(localStorage.getItem('hour-03'))
$('#hour-4 .description').val(localStorage.getItem('hour-4'))
$('#hour-5 .description').val(localStorage.getItem('hour-5'))

// display the current date in header
$('#currentDay').text(dayjs().format('dddd MMMM D'));

// listener for click events on the save button
$('.saveBtn').on('click', function () {
  console.log('clicked')
  let targetText = $(this).siblings("textarea").val();
  let hourSpan = $(this).parent().attr('id')
  localStorage.setItem(hourSpan, targetText)
});

updateBackGroundColor();


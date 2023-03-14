
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
$('#hour-01 .description').val(localStorage.getItem('hour-01'))
$('#hour-02 .description').val(localStorage.getItem('hour-02'))
$('#hour-03 .description').val(localStorage.getItem('hour-03'))
$('#hour-04 .description').val(localStorage.getItem('hour-04'))
$('#hour-05 .description').val(localStorage.getItem('hour-05'))

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


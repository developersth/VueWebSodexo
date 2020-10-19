export default class Utility {
  constructor() {
  }
  format_time(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return hours + ':' + minutes + ':00';
  }
  format_date(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }
  format_date_time(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds;
  }
}

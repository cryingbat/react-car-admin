export default {
    formateDate(date) {
        if(!date) return '';
        let time = new Date(date);
        return time.getFullYear()+ '-' + (time.getMonth()+1) + '-' + time.getDate()+ '  ' + time.getHours()+ ':' + time.getMinutes()+':'+time.getSeconds();
    }
}
export default {
    formateDate(date) {
        if(!date) return '';
        let time = new Date(date);
        return time.getFullYear()+ '-' + (time.getMonth()+1) + '-' + time.getDate()+ '  ' + time.getHours()+ ':' + time.getMinutes()+':'+time.getSeconds();
    },
    pagenation(data, callback) {
        return  {
            currentPage: data.result.current,
            total: data.result.total,
            pageSize: data.result.pageSize,
            onChange(current) {
                callback(current)
            } ,
            showTotal(){
                return `共${data.result.total}条数据`
            },
            showQuickJumper: true
        }

    }
}
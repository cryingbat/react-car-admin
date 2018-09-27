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

    },
    /**
     * DTable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    },
}
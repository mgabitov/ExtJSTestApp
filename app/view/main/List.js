Ext.define('TestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'products',

    requires: [
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'TestApp.store.Personnel'
    ],

    title: 'Список товаров',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя',  dataIndex: 'name' },
        { text: 'Описание',  dataIndex: 'desc' },
        { text: 'Цена', dataIndex: 'price'},
        { text: 'Кол-во', dataIndex: 'quantity', tdCls: 'x-change-cell'}
    ],
    tbar:[{
        html: 'ID:'
        },
        {
        xtype    : 'numberfield',
        name     : 'idfield',
        minValue: 1,
        scope: this,
        emptyText: 'Введите фильтр',
        listeners: {
                specialkey: function(f,e){
                    if(e.getKey() === e.ENTER){
                        let value = this.getRawValue()
                        this.up('grid').getStore().addFilter([{
                            id:"filter-3",
                            filterFn:function(record) {
                                if (value) {
                                    return record.get('id') === +value;
                                }
                                else return record.get
                            }
                        }]);
                    }
                }
            },
    },{
            html: 'Описание:'
        },
        {
        xtype    : 'textfield',
        name     : 'descfield',
        emptyText: 'Введите фильтр',
            listeners: {
                specialkey: function(f,e){
                    if(e.getKey() === e.ENTER){
                        let value = this.getRawValue()
                        this.up('grid').getStore().addFilter([{
                            id:"filter-2",
                            filterFn:function(record) {
                                return record.get('desc').indexOf(value) > -1;
                            }
                        }]);
                    }
                }
            }}
       ],
    viewConfig: {
        getRowClass: function(record) {
            let c = record.get('quantity');
            if (+c === 0) {
                return 'quantity-zero';
            }
        }
    },

    listeners: {
        cellclick: 'onActionClick'
    }
});

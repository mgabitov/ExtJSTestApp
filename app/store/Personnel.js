Ext.define('TestApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        {id: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {desc: 'desc', type: 'string'},
        {price: 'price', type: 'number'},
        {quantity: 'quantity', type: 'int'}
    ],

    data: {
        items: [
            {id: 1, name: 'Notebook Lenovo', desc: "Ноутбук Lenovo ThinkPad Carbon X1", price: "1555", quantity: "10"},
            {id: 2, name: 'Keyboard OKLICK', desc: "Клавиатура Oklick 140M", price: "155", quantity: "5"},
            {id: 3, name: 'Notebook Apple', desc: "Ноутбук Apple MacBook Pro 16", price: "2555", quantity: "1"},
            {id: 4, name: 'Network Adapter', desc: "Сетевой адаптер Wi-Fi", price: "150", quantity: "0"},
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

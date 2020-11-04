
Ext.define('TestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Number',
        'TestApp.view.login.Login',
        'TestApp.view.main.List'
    ],
    onAddTabClick: function() {
        var tabPanel = this.getView()
            tab = tabPanel.add({
                items: [{
                    xtype: 'products'
                }],
                title:'Товары'
            });

        tabPanel.setActiveTab(tab);
    },

    onActionClick: function (thisGrid, td, cellIndex, record) {
        if (cellIndex === 1) {
            let f = new Ext.form.Panel({
                width: 500,
                height: 400,
                bodyPadding: 10,
                title: `Карточка товара: ${td.innerText}`,
                floating: true,
                closable: true,
                items: [{
                    html: `ID: ${record.data.id}`,
                    bodyPadding: 10,
                }, {
                    html: `Наименование: ${record.data.desc}`,
                    bodyPadding: 10,
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена',
                    name: 'price',
                    minValue: 0,
                    value: record.data.price,
                    allowBlank: false,
                    allowNegative: false,
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во',
                    minValue: 0,
                    name: 'quantity',
                    value: record.data.quantity,
                    allowBlank: false,
                    allowNegative: false,
                    allowDecimals: false
                }],

                // Reset and Submit buttons
                buttons: [{
                    text: 'Сохранить',
                    formBind: true,
                    disabled: true,
                    handler: function () {
                        let values = f.getForm().getValues()
                        record.set(values);
                        f.updateRecord(record);
                        Ext.Msg.alert('Сообщение', 'Данные обновлены');
                        f.close();
                    }
                },
                    {
                        text: 'Отмена',
                        handler: function () {
                            win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();}
                        }
                    },],
            }).show();

            console.log('td/cell value: ', td.innerText);
        }
    },

    onClickButton: function () {
        localStorage.removeItem('TestLoggedIn');


        this.getView().destroy();


        Ext.create({
            xtype: 'login'
        });
    }
});

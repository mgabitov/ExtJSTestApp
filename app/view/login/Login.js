Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Display',

    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{html: "<img src=\"image.png\" alt=... />"},{
            xtype: 'textfield',
            name: 'username',
            reference: 'user',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            reference: 'pass',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
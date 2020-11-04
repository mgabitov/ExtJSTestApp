Ext.define('TestApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TestApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
    ],

    launch: function () {
        var loggedIn;
        loggedIn = localStorage.getItem("TestLoggedIn");
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

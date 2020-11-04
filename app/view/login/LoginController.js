Ext.define('TestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        let userData = this.lookupReference('user')
        let passData = this.lookupReference('pass')
        if (userData.lastValue === 'admin' && passData.lastValue === 'padmin') {
            //Вообще так делать небезопасно, нужно проверять пароль через хэш-функцию
            console.log('SUCCESS!')
            localStorage.setItem("TestLoggedIn", true);
            this.getView().destroy();
            Ext.create({
                xtype: 'app-main'
            });
        }
        else {
            Ext.Msg.alert('Внимание', 'Вы ввели неверные данные для входа');
        }
    }

});
Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TestApp.view.main.MainController',
        'TestApp.view.main.MainModel',
        'TestApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Учет товаров'
            },
            flex: 0
        },
        items: [ {
            xtype: 'button',
            text: 'Товары',
            margin: '10 0',
            handler: 'onAddTabClick'
        },
            {
                xtype: 'button',
                text: 'Выход',
                margin: '10 0',
                handler: 'onClickButton'
            }
        ]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },


});

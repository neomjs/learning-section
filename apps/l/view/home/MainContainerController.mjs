import Component from '../../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class L.view.home.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static config = {
        /**
         * @member {String} className='L.view.home.MainContainerController'
         * @protected
         */
        className: 'L.view.home.MainContainerController'
    }

    /**
     * @param {Object} record
     */
    onContentListLeafClick(record) {
        let contentContainer = this.getReference('content-container');
        if (record.path) {

            import(`../content/${record.path}`).then(module => {
                console.log(module);
                contentContainer.add({
                    module: module.default,
                    id: record.path,
                    tabButtonConfig: {
                        iconCls: 'fa fa-user',
                        text: record.name
                    }
                });
                // contentContainer.layout.activeIndex = 0;
            })
        }
        console.log('onContentListLeafClick', {
            contentContainer,
            record
        });
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
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

        console.log('onContentListLeafClick', {contentContainer, record});
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;

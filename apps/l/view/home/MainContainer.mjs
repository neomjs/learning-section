import Container from '../../../../node_modules/neo.mjs/src/container/Base.mjs';
import TabContainer from '../../../../node_modules/neo.mjs/src/tab/Container.mjs';
import ContentTreeList from './ContentTreeList.mjs';
import MainContainerController from './MainContainerController.mjs';
import Splitter from '../../../../node_modules/neo.mjs/src/component/Splitter.mjs';

/**
 * @class L.view.home.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends Container {
    static config = {
        /**
         * @member {String} className='L.view.home.MainContainer'
         * @protected
         */
        className: 'L.view.home.MainContainer',
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module: Container,
            layout: 'fit',
            width: 300,

            items: [{
                module: ContentTreeList,
                listeners: {
                    leafItemClick: 'onContentListLeafClick'
                }
            }]
        }, {
            module: Splitter,
            resizeTarget: 'previous'
        }, {
            module: TabContainer,
            activeIndex: null,
            reference: 'content-container'
        }],
        /**
         * @member {Object} layout={ntype:'hbox',align:'stretch'}
         */
        layout: {
            ntype: 'hbox',
            align: 'stretch'
        }
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
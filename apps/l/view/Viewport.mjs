import BaseViewport       from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import ViewportController from './ViewportController.mjs';

/**
 * @class L.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static config = {
        /**
         * @member {String} className='L.view.Viewport'
         * @protected
         */
        className: 'L.view.Viewport',
        /**
         * @member {Neo.controller.Component} controller=ViewportController
         */
        controller: ViewportController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module: () => import('./home/MainContainer.mjs')
        }],
        /**
         * @member {Object} layout={ntype:'card'}
         */
        layout: {ntype: 'card'}
    }
}

Neo.applyClassConfig(Viewport);

export default Viewport;

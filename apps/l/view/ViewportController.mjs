import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class L.view.ViewportController
 * @extends Neo.controller.Component
 */
class ViewportController extends Component {
    static config = {
        /**
         * @member {String} className='L.view.ViewportController'
         * @protected
         */
        className: 'L.view.ViewportController'
    }
}

Neo.applyClassConfig(ViewportController);

export default ViewportController;

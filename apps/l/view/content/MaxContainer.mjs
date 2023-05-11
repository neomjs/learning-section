import Base from '../../../../node_modules/neo.mjs/src/container/Base.mjs';

/**
 * @class L.view.content.MaxContainer
 * @extends Neo.container.Base
 */
class MaxContainer extends Base {
    static config = {
        /**
         * @member {String} className='L.view.content.MaxContainer'
         * @protected
         */
        className: 'L.view.content.MaxContainer',
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype: 'component',
            vdom: {
                innerHTML: 'Yo'
            }
        }]
    }
}

Neo.applyClassConfig(MaxContainer);

export default MaxContainer;
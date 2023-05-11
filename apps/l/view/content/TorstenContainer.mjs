import Base from '../../../../node_modules/neo.mjs/src/container/Base.mjs';

/**
 * @class L.view.content.TorstenContainer
 * @extends Neo.container.Base
 */
class TorstenContainer extends Base {
    static config = {
        /**
         * @member {String} className='L.view.content.TorstenContainer'
         * @protected
         */
        className: 'L.view.content.TorstenContainer',
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype: 'component',
            vdom: {
                innerHTML: 'Mama'
            }
        }]
    }
}

Neo.applyClassConfig(TorstenContainer);

export default TorstenContainer;
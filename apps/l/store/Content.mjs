import ContentModel from '../model/Content.mjs';
import Store        from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class L.store.Content
 * @extends Neo.data.Store
 */
class Content extends Store {
    static config = {
        /**
         * @member {String} className='L.store.Content'
         * @protected
         */
        className: 'L.store.Content',
        /**
         * @member {Neo.data.Model} model=ContentModel
         */
        model: ContentModel
    }
}

Neo.applyClassConfig(Content);

export default Content;

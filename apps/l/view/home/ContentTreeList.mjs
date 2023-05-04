import ContentStore from '../../store/Content.mjs'
import TreeList     from '../../../../node_modules/neo.mjs/src/tree/List.mjs';

/**
 * @class L.view.home.ContentTreeList
 * @extends Neo.container.Base
 */
class ContentTreeList extends TreeList {
    static config = {
        /**
         * @member {String} className='L.view.home.ContentTreeList'
         * @protected
         */
        className: 'L.view.home.ContentTreeList',
        /**
         * @member {Neo.data.Store} store=ContentStore
         */
        store: ContentStore
    }

    /**
     * todo: createItems() should get triggered onStoreLoad()
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../../resources/data/content.json'
        }).then(data => {
            me.store.data = data.json.data;
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update();
        });
    }
}

Neo.applyClassConfig(ContentTreeList);

export default ContentTreeList;

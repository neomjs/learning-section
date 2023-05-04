import Model from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class L.model.Content
 * @extends Neo.data.Model
 */
class Content extends Model {
    static config = {
        /**
         * @member {String} className='L.model.Content'
         * @protected
         */
        className: 'L.model.Content',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'className',
            type: 'String'
        }, {
            name: 'collapsed',
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }]
    }
}

Neo.applyClassConfig(Content);

export default Content;

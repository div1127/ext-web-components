import { Base, Factoryable, define } from '../../../extjs-core/src';

import { Cloneable } from '../../../extjs-util/src/mixins';

/**
 * This class is a base for all model id generators.
 * 
 * `Identifiers` are used to generate a primary key for new records. There are different
 * approaches to solving this problem, so this mechanism has both simple use cases and
 * is open to custom implementations. A {@link Model} controls id generation via the
 * {@link Model#identifier} property.
 *
 * The following types of `Identifiers` are provided:
 *
 *   * `{@link SequentialIdentifier sequential}`
 *   * `{@link NegativeIdentifier negative}`
 *   * `{@link UuidIdentifier uuid}`
 *
 * In most cases (other than `uuid`), the server is the only party that can generate
 * authoritative id values. This means that any id generated by an `Identifier` should be
 * consider provisional and must eventually be reconciled with the server. This makes a
 * `uuid` very attractive as an `Identifier` because they are designed to be generated in
 * a distributed manner and therefore never require reconciliation.
 *
 * It is common for id values to be generated as increasing integer values (1, 2, etc.) by
 * the server when records are inserted. A `{@link NegativeIdentifier}` may be useful as
 * it generates client-side values of -1, -2, etc.. These values are the correct data type
 * (integer) and so can typically be read by servers using typed languages like Java or C#.
 * Further, the values can be easily recognized as provisional.
 *
 * In the end, the choice of `Identifier` strategy requires agreement between client and
 * server.
 *
 * # Shared Identifiers
 *
 * To share `Identifier`, simply provide the same `Identifier` instance:
 * 
 *      import { myIdentifier } from '...';
 *
 *      @define
 *      class MyModelA extends Model {
 *          @config
 *          static identifier = myIdentifier;
 *      }
 *
 * # Custom Identifiers
 * 
 * An `Identifier` derives from this class and implements the {@link #generate} method:
 *
 *      import { Identifier } from '../../../extjs-data/identifier';
 *      
 *      @define
 *      class CustomIdentifier extends Identifier {
 *          generate () {
 *              return ... // a new id
 *          }
 *      }
 *
 * Using the custom `Identifier` class looks like the following:
 * 
 *      import { CustomIdentifier } from '...';
 *
 *      @define
 *      class MyModelA extends Model {
 *          @config
 *          static identifier = myIdentifier;
 *      }
 * 
 * If the new `CustomIdentifier` will be created by alias, simply define its `type`:
 *      
 *      @define({
 *          type: 'custom'
 *      })
 *      class CustomIdentifier extends Identifier {
 *          generate () {
 *              return ... // a new id
 *          }
 *      }
 *
 * Usage in this case would look like:
 *
 *      @define
 *      class MyModelA extends Model {
 *          @config
 *          static identifier = {
 *              type: 'custom'
 *          };
 *      }
 *
 */
@define({
    mixins: [
        Factoryable,
        Cloneable
    ],

    alias: 'identifier.base', // this is used by Factoryable

    factory: {
        defaultType: 'sequential' // because this class is not suitable to create
    }
})
class Identifier extends Base {
    reset () {
        // implemented by some derived classes
        return this;
    }
}

export { Identifier };

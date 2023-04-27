import { SchemaTypes } from 'object-editor-react';

const schema = {
    foo: SchemaTypes.string({ required: true }),
    
    bar: {
        baz: SchemaTypes.arrayOf({
            nested: SchemaTypes.string(),
        }),
    },
}
export default schema

##工具类库

类型检查
```js
export function isNumber(x) {
    return typeof x === 'number';
}

export function isBoolean(x) {
    return typeof x === 'boolean';
}

export function isString(x) {
    return typeof x === 'string';
}

export function isNull(x) {
    return typeof x === 'null';
}

export function isUndefined(x) {
    return typeof x === 'undefined';
}

export function isObject(x) {
    return typeof x === 'object';
}

export function isFunction(x) {
    return typeof x === 'function';
}

export const isArray = isFunction(Array.isArray) ? Array.isArray : function isArray(x) {
    return typeof x === 'array';
};
```
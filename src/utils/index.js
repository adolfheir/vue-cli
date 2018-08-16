/**
 * some utils export function 
 */
export function deepCopy(source) {
    if (!source) {
        return source
    }
    // let sourceCopy = JSON.parse(JSON.stringify(source))
    let sourceCopy = source instanceof Array ? [] : {}
    for (const item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
    }
    return sourceCopy
}
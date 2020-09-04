const objectAdapter = (obj, oldFieldName, newFieldName) => {
    if (Array.isArray(obj)) {
        let clones = [];
        obj.forEach(o => clones.push(getCloneObjectWithRenamedFields(o, oldFieldName, newFieldName)));
        return clones;
    } else {
        return getCloneObjectWithRenamedFields(obj, oldFieldName, newFieldName);
    }
}

const getCloneObjectWithRenamedFields = (obj, oldName, newName) => {
    return Object.assign({}, obj,
        {[oldName]: undefined},
        {[newName]: obj[oldName]});
}

export default objectAdapter;
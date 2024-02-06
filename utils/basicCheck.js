

export default function basicCheck(basic) {
    const { name, description, requiredQuantity, requiredCrudeProtein } = basic;
    if (!name || !description || !requiredCrudeProtein || !requiredQuantity) {
        return {pass:false, err:"all the form field marked with * are required"}
    }
    return {pass:true, err:null}
}
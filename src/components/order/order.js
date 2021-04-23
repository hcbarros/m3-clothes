

 export const order = (value, array) => {

    let arr = [];
    switch(value) {
        case 'low':
            arr = array.sort(function(a,b) {
                return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
            });
            break;
        case 'high':
            arr = array.sort(function(a,b) {
                return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
            });
            break;    
        default:
            arr = array.sort(function(a,b) {
                let da = new Date(a.date);
                let db = new Date(b.date);
                return da > db ? -1 : da < db ? 1 : 0;
            });    
    }

    return arr;
}
export default {
    
    getCats() {
        return fetch ('http://localhost:3000/api/cats', {
            headers: { 'Content-Type': 'application/json'}
        })

        .then(response => response.json());
    },

    addCat(cat) {
        return fetch ('http://localhost:3000/api/cats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(cat)
        })

        .then(response => response.json());
    }
};
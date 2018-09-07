import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [{
            id: 'Grande Olde Mansion', 
            title: 'Grade Olde Mansion',
            owner: 'Varuca Salt', 
            city: 'San Fransisco',
            category: 'Estate',
            bedrooms: 15,
            image: "https://source.unsplash.com/300x300/?mansion",
            description: 'A mucho grande olde mansion.'
        }, {
            id: 'Urban Living',
            title: 'Urban Living', 
            owner: 'A friendly lady',
            city: 'Seattle',
            category: 'Condo',
            bedrooms: 1,
            image: 'https://source.unsplash.com/300x300/?condo',
            description: 'A charming one bedroom condo in the heart of Seattle, bring a raincoat!'
        }, {
            id: 'downtown-charm',
            title: 'Downtown Charm',
            owner: 'An ugly dood',
            city: 'Devner',
            category: 'Apartment',
            bedrooms: 3,
            image: 'https://source.unsplash.com/300x300/?apartment',
            description: 'All the conveniences of downtown, including zero parking spots within 7 miles!'
        }]
    }
});

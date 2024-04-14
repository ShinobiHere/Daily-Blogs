export default {
    name:'blog',
    type:'document',
    title:'Blog',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Blog Article',
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug of Article',
            options:{
                source:'title'
            }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title Image of Article',
        },
        {
            name:'smallDescription',
            type:'text',
            title:'Small Description',
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                }
            ]
        }
    ]
}
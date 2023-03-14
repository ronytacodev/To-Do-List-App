new Vue ({
    el: '#tasklist',
    data: {
        title: 'to do list',
        tasks: [
            {name: 'Today : Internal Meeting'},
            {name: 'Tomorrow : Read a Book'},
            {name: 'Daily :  Learn Programming'},
            {name: 'Daily :  Morning Walk'},
        ]
    },
    methods: {
        newItem: function() {
            if (!this.tasks.name) {
                return
            }
            this.tasks.push ({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = "";
        },
        delItem: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})